const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ValidationError = require('../errors/validation-err');
const ConflictError = require('../errors/conflict-err');
const NotFoundError = require('../errors/not-found-err');
const Unauthorized = require('../errors/unauthorized-err');

const SALT_ROUNDS = 10;

const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const validationError = new ValidationError('Не передан емейл или пароль');
    next(validationError);
  }
  return User.findUserByCredentials(email, password)
    .then((user) => {
      // аутентификация успешна! пользователь в переменной user
      // создадим токен
      const token = jwt.sign(
        { _id: user._id },
        'some-secret-key',
        { expiresIn: '7d' }, // токен будет просрочен через неделю после создания
      );

      // вернём токен
      res.send({ token });
    })
    .catch((err) => {
      // ошибка аутентификации
      const unauthorized = new Unauthorized(err.message);
      next(unauthorized);
    });
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch(next);
};

const getProfile = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Пользователь с таким id не найден');
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        const validationError = new ValidationError('Не валидный ID');
        next(validationError);
      }
      next(err);
    });
};

const createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;
  if (!email || !password) {
    const validationError = new ValidationError('Не передан емейл или пароль');
    next(validationError);
  }
  // хешируем пароль
  bcrypt
    .hash(password, SALT_ROUNDS)
    .then((hash) => User.create({
      email, password: hash, name, about, avatar,
    }))
    .then(() => res.status(200).send({ message: 'Пользователь создан!' }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const validationError = new ValidationError(err.errors.email.message);
        next(validationError);
      } else {
        const conflictError = new ConflictError('Такой пользователь уже существует');
        next(conflictError);
      }
      next(err);
    });
};

const patchProfile = (req, res, next) => {
  const { name, about } = (req.body);
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        if (err.errors.name) {
          const validationError = new ValidationError(err.errors.name.message);
          next(validationError);
        } else {
          const validationError = new ValidationError(err.errors.about.message);
          next(validationError);
        }
      }
      next(err);
    });
};

const patchAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const validationError = new ValidationError(err.errors.avatar.message);
        next(validationError);
      }
      next(err);
    });
};

module.exports = {
  createUser,
  login,
  getUsers,
  getProfile,
  patchProfile,
  patchAvatar,
};
