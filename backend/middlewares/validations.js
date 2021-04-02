const { celebrate, Joi } = require('celebrate');

const postSignValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const patchUserValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

const patchAvatarValidate = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/^http[s]?:\/\/\w+/),
  }),
});

const postCardsValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string()
      .required()
      .regex(/^http[s]?:\/\/\w+/),
  }),
});

const deleteCardValidate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex(),
  }),
});

const likeValidate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex(),
  }),
});

module.exports = {
  postSignValidate,
  patchUserValidate,
  patchAvatarValidate,
  postCardsValidate,
  deleteCardValidate,
  likeValidate,
};
