require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// const options = {
//   origin: [
//     'http://localhost:3001',
//     'https://mesto.lb.nomoredomains.club',
//     'https:/github.com/ALB040570',
//   ],
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
//   credentials: true,
// };

const { PORT = 3001 } = process.env;
const app = express();
// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { errors } = require('celebrate');
const userRouter = require('./routes/users.js');
const cardRouter = require('./routes/cards.js');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { postSignValidate } = require('./middlewares/validations');

// app.use('*', cors(options));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(requestLogger); // подключаем логгер запросов

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// роуты, не требующие авторизации
app.post('/signup', postSignValidate, createUser);
app.post('/signin', postSignValidate, login);

// авторизация
app.use(auth);

// роуты, которым авторизация нужна
app.use('/', cardRouter);
app.use('/', userRouter);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errorLogger); // подключаем логгер ошибок
// здесь обрабатываем все ошибки
// обработчики ошибок
app.use(errors()); // обработчик ошибок celebrate

// наш централизованный обработчик
app.use(errorHandler);

app.listen(PORT);
