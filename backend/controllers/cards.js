const Card = require('../models/card');
const ValidationError = require('../errors/validation-err');
const NotFoundError = require('../errors/not-found-err');
const Forbidden = require('../errors/forbidden-err');

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
          next(new ValidationError(err.errors.name.message));
        } else {
          if (err.errors.link) {
            next(new ValidationError(err.errors.link.message));
          }
          next(new ValidationError(err.errors.createdAt.message));
        }
      }
      next(err);
    });
};

const deleteCard = (req, res, next) => {
  Card
    .findOne({ _id: req.params.cardId })
    .orFail(() => new NotFoundError('Карточка с таким id не найдена'))
    .then((card) => {
      if (!card.owner._id.equals(req.user._id)) {
        next(new Forbidden('Нельзя удалить чужую карточку'));
      } else {
        Card.deleteOne(card)
          .then(() => res.send({ data: card }));
      }
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new ValidationError('Невалидный id карточки'));
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
        next(new ValidationError('Не валидный ID'));
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
        next(new ValidationError('Не валидный ID'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getCards, postCards, deleteCard, addLike, deleteLike,
};
