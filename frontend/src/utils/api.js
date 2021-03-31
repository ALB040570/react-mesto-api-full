
// класс Api

class Api {
  constructor() {
    this._baseUrl  = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
    this._usersMe = '/users/me';
    this._cards = '/cards';
    this._likes = '/cards/likes';
    this._avatar = '/users/me/avatar';
    this._signIn = '/signin';
    this._signUp = '/signup';
  }
  //

  //Отправка на сервер данных регистрации пользоваателя
  register(email, password) {
    return fetch(this._baseUrl + this._signUp, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse)
  }

  //Отправка на сервер данных для авторизации
  authorize(email, password) {
    return fetch(this._baseUrl + this._signIn, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse)
  }
  //заполняет заголовок запроса
  setToken(token) {
    this._headers = {
      ...this.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  // запрос для проверки валидности токена
  getContent(token) {
    return fetch(this._baseUrl + this._usersMe, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      
    })
    .then(this._checkResponse)
  }

  //Загрузка карточек с сервера
  getCards() {
    return fetch(this._baseUrl + this._cards, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
      
    })
    .then(this._checkResponse)
  }
  //Загрузка информации о пользователе с сервера
  getUsersInfo() {
    return fetch(this._baseUrl+this._usersMe, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
      
    })
    .then(this._checkResponse)
  }
  //Редактирование профиля
  patchUsersInfo(data) {
    
    return fetch(this._baseUrl+this._usersMe, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(this._checkResponse)
  }


  //Добавление новой карточки
  postCard(data) {
    return fetch(this._baseUrl + this._cards, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(this._checkResponse)
  }
  //Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}${this._cards}/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
    })
    .then(this._checkResponse)
  }

  //функция объединяет и вызывает методы обновления/снятия лайка
  changeLikeCardStatus(cardId, isLike) {
    const method = isLike?'PUT':'DELETE';
    return fetch(`${this._baseUrl}${this._likes}/${cardId}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
    })
    .then(this._checkResponse)
  }


  //Постановка лайка
  putLike(cardId) {
    return fetch(`${this._baseUrl}${this._likes}/${cardId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
    })
    .then(this._checkResponse)
  }
  //Cнятие лайка
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}${this._likes}/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
    })
    .then(this._checkResponse)
  }
  //Обновление аватара пользователя
  patchAvatar(data) {
    return fetch(this._baseUrl+this._avatar, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar
        })
    })
    .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

}
const api = new Api();


export default api;
