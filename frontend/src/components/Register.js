
import {useState} from 'react';
import Header from './Header';
import Form from './Form.js';


function Register(props) {
  // Стейты, в которых содержатся значения инпутов
  const [data, setData] = useState({
    email: '',
    password: '',
  });

   //Обработчик изменения инпута обновляет стейт
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
   }

  const handleSubmit = (e) =>{
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  if (!data.email || !data.password){
    return;
  }
  // Передаём значения управляемых компонентов во внешний обработчик
  props.onRegister(data.email, data.password);
  }

  return(
    <div className="page">
      <Header buttonName="Войти" toLink="/sign-in"/>
      <div className="popup popup_auth popup_opened">
        <Form
          type="auth"
          id="register"
          name = "register"
          title = "Регистрация"
          onSubmit = {handleSubmit}
          >
            <input
              placeholder="Email"
              required
              className="popup__input popup__input_black"
              name = "email"
              id="email"
              type = "email"
              value={data.email || ''}
              onChange={handleChange} />
            <span className="popup__error" id="email-error"/>
            <input
              placeholder="Пароль"
              required
              className="popup__input popup__input_black"
              name = "password"
              id="password"
              type="password"
              value={data.password || ''}
              onChange={handleChange} />
            <span className="popup__error" id="password-error"/>
        </Form>
      </div>
    </div>
  )
}
export default Register;