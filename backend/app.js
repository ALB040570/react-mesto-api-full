const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { PORT = 3001 } = process.env;
const app = express();
// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const userRouter = require('./routes/users.js');
const cardRouter = require('./routes/cards.js');
const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// роуты, не требующие авторизации,
// например, регистрация и логин
app.post('/signup', createUser);
app.post('/signin', login);

// авторизация
app.use(auth);

// роуты, которым авторизация нужна
app.use('/', cardRouter);
app.use('/', userRouter);
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
