const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const MONGO_DUPLICATE_ERROR_CODE = 11000;
const SALT_ROUNDS = 10;

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: 'Не передан емейл или пароль' });
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
      res
        .status(401)
        .send({ message: err.message });
    });
};

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Ошибка сервера' }));
};

const getProfile = (req, res) => {
  User.findById(req.user._id)
    .orFail(() => {
      const err = new Error('Пользователь с таким id не найден');
      err.statusCode = 404;
      throw err;
    })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        res
          .status(400)
          .send({ message: 'Не валидный ID' });
      } else
      if (err.statusCode === 404) {
        res
          .status(404)
          .send({ message: 'Пользователь с таким ID не найден' });
      }
      res
        .status(500)
        .send({ message: 'Ошибка сервера' });
    });
};

const createUser = (req, res) => {
  const {
    email, password, name, about, avatar,
  } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: 'Не передан емейл или пароль' });
  }
  // хешируем пароль
  bcrypt
    .hash(password, SALT_ROUNDS)
    .then((hash) => User.create({
      email, password: hash, name, about, avatar,
    }))
    .then(() => res.status(200).send({ message: 'Пользователь создан!' }))
    .catch((err) => {
      const ERROR_CODE = 400;
      if (err.name === 'ValidationError') {
        if (err.errors.name) {
          res.status(ERROR_CODE).send({ message: err.errors.name.message });
        } else {
          if (err.errors.about) {
            res.status(ERROR_CODE).send({ message: err.errors.about.message });
          }
          res.status(ERROR_CODE).send({ message: err.errors.avatar.message });
        }
      }
      if (err.code === MONGO_DUPLICATE_ERROR_CODE) {
        res.status(409).send({ message: 'Такой пользователь уже существует' });
      } else {
        res.status(500).send({ message: 'Ошибка сервера пп' });
      }
    });
};

const patchProfile = (req, res) => {
  const { name, about } = req.body;
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
      const ERROR_CODE = 400;
      if (err.name === 'ValidationError') {
        if (err.errors.name) {
          res.status(ERROR_CODE).send({ message: err.errors.name.message });
        } else {
          res.status(ERROR_CODE).send({ message: err.errors.about.message });
        }
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const patchAvatar = (req, res) => {
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
        res.status(400).send({ message: err.errors.avatar.message });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
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
