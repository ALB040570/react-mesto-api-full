const Card = require('../models/card');
const ValidationError = require('../errors/validation-err');
const NotFoundError = require('../errors/not-found-err');

const getCards = (req, res, next) => {
  Card.find({})
    .populate(['likes', 'owner'])
    .then((cards) => res.status(200).send({ data: cards }))
    .catch(next);
};

const postCards = (req, res, next) => {
  const { name, link, createdAt } = req.body;
  const { _id } = req.user;

  Card.create({
    name,
    link,
    createdAt,
    owner: _id,
  })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        if (err.errors.name) {
          const validationError = new ValidationError(err.errors.name.message);
          next(validationError);
        } else {
          if (err.errors.link) {
            const validationError = new ValidationError(err.errors.link.message);
            next(validationError);
          }
          const validationError = new ValidationError(err.errors.createdAt.message);
          next(validationError);
        }
      }
      next(err);
    });
};

const deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .orFail(() => {
      throw new NotFoundError('Карточка с таким id не найдена');
    })
    .populate(['likes', 'owner'])
    .then((cards) => res.status(200).send({ data: cards }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        const validationError = new ValidationError('Не валидный ID');
        next(validationError);
      } else {
        next(err);
      }
    });
};

const addLike = (req, res, next) => {
  const { cardId } = req.params;
  const { _id } = req.user;
  Card.findByIdAndUpdate(
    cardId,
    {
      $addToSet: {
        likes: _id,
      },
    },
    {
      new: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Карточка с таким id не найдена');
    })
    .populate(['likes', 'owner'])
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        const validationError = new ValidationError('Не валидный ID');
        next(validationError);
      } else {
        next(err);
      }
    });
};

const deleteLike = (req, res, next) => {
  const { cardId } = req.params;
  const { _id } = req.user;
  Card.findByIdAndUpdate(
    cardId,
    {
      $pull: {
        likes: _id,
      },
    },
    {
      new: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Карточка с таким id не найдена');
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        const validationError = new ValidationError('Не валидный ID');
        next(validationError);
      } else {
        next(err);
      }
    });
};

module.exports = {
  getCards, postCards, deleteCard, addLike, deleteLike,
};
