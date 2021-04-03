const { celebrate, Joi } = require('celebrate');

const postSignUpValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().default('Жак-Ив Кусто').min(2).max(30),
    about: Joi.string().default('Исследователь').min(2).max(30),
    avatar: Joi.string().default('https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png').regex(/^http[s]?:\/\/\w+/),
  }),
});

const postSignInValidate = celebrate({
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

const getProfileValidate = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().required().length(24),
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
    cardId: Joi.string().hex().required().length(24),
  }),
});

const likeValidate = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().required().length(24),
  }),
});

module.exports = {
  postSignUpValidate,
  postSignInValidate,
  patchUserValidate,
  patchAvatarValidate,
  getProfileValidate,
  postCardsValidate,
  deleteCardValidate,
  likeValidate,
};
