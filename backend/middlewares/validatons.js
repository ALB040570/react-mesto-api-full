const { celebrate, Joi } = require('celebrate');

const validateUserBody = () => {
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }).unknown(true),
    headers: Joi.object().keys({
    //   authorization: Joi.string().required(),
      Accept: Joi.string().required(),
      'Content-Type': Joi.string().required(),
    }).unknown(true),
  });
};

module.exports = {
  validateUserBody,
};
