const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'отсутствует обязательное поле "email"'],
    unique: true,
    validate: { // опишем свойство validate
      validator(v) { // validator - функция проверки данных. v - значение свойства email
        return validator.isEmail(v); // если не почта, вернётся false
      },
      message: 'Значение должно соответствовать схеме электронной почты.', // когда validator вернёт false, будет использовано это сообщение
    },
  },
  password: {
    type: String,
    required: [true, 'отсутствует обязательное поле "Пароль"'],
    select: false,
  },
  name: {
    type: String,
    // required: [true, 'отсутствует обязательное поле "имя пользователя"'],
    minlength: [2, 'имя пользователя короче двух символов'],
    maxlength: [30, 'имя пользователя длинее 30 символов'],
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    // required: [true, 'отсутствует обязательное поле "информация о пользователе"'],
    minlength: [2, 'информация о пользователе короче двух символов'],
    maxlength: [30, 'информация о пользователе длинее 30 символов'],
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    // required: [true, 'отсутствует обязательное поле "аватар"'],
    validate: {
      validator(v) {
        // eslint-disable-next-line no-useless-escape
        const regex = /(https?:\/\/)(w{3}\.)?([a-z0-9\-]+\.[a-z]+)(\/[\w\-\._~:\/\?#\[\]@\!\$&'\(\)\*\+,;=]*\/?#?)?/;
        return regex.test(v);
      },
      message: 'унифицированный указатель ресурса (url аватара) начинается не с http:// или https:// или не указан домен',
    },
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
});

// добавим метод findUserByCredentials схеме пользователя
// у него будет два параметра — почта и пароль
userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  // попытаемся найти пользовател по почте
  return this.findOne({ email }).select('+password') // this — это модель User
    .then((user) => {
      // не нашёлся — отклоняем промис
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }

      // нашёлся — сравниваем хеши
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }

          return user; // теперь user доступен
        });
    });
};

module.exports = mongoose.model('user', userSchema);
