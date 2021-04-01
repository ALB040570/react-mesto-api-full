function InfoTooltip(props) {
  return (
    <div className= {`popup popup_view ${props.isOpen&&'popup_opened'}`} id="info">
    <div className="popup__grid">
      <button type="button" className="popup__close" onClick={props.onClose}/>
      <div className="popup__form">
        <figure className="popup__image-conteiner">
          {props.typeInfo==='fail'?<div className="popup__image popup__image_fail"/>:<div className="popup__image popup__image_success"/>}
          <figcaption className="popup__title">{props.typeInfo==='fail'?'Что-то пошло не так! Попробуйте еще раз.':'Вы успешно зарегистрировались!'}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>)
}
export default InfoTooltip;