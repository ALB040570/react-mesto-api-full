(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),s=n.n(o),i=n(9),r=(n(30),n(24)),p=n(3),l=c.a.createContext(),u=n(0);var d=function(e){var t=Object(a.useContext)(l),n=e.card.owner._id===t._id,c="element__trash ".concat(n?"element__trash_visible":"element__trash_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),s="element__like ".concat(o&&"element__like_active");return Object(u.jsxs)("li",{className:"element",children:[Object(u.jsx)("div",{className:"element__bord",children:Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__photo",onClick:function(){return e.onCardClick(e.card)}})}),Object(u.jsx)("h2",{className:"element__title",children:e.card.name}),Object(u.jsxs)("div",{className:"element__like-group",children:[Object(u.jsx)("button",{type:"button",className:s,onClick:function(){return e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]}),Object(u.jsx)("button",{type:"button",className:c,onClick:function(){return e.onCardDelete(e.card)}})]})};var j=function(e){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAiCAMAAABRP3qRAAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAIGCfvxBAgN/vAVCv3W8wz5Ahj85xUV8w+oIAAAM6SURBVFjDxZbr2tsgCIARhWg0xnaH3P+dzmgs2q87uOdbx4+qCPoGkQpvlNVkwZdT5HZ4u6wHMocvL+c8wdtEeBTA3cHuARQCsL5lxX7TuR8JaNH4Lirh2R2gziwGcPO40d0ib7xuarU3Cd5bZD0iYloaz5Ibgv3r+Zt5gDLsBm8Q4Qnaamg892T1DuvNBSw8HGzKPCoLfch30X7uebGjxnMm0XmtiL9i5uGN6b6BOrK45631qV3+Ac9qFuBNUTAQEdavzAus+kvmwUwYL57DD45FOc/jEZF+w3MGaA3ORgO7NU4DhZSMyjyUUtKNx4ye+Fc8JvuoP7K8qFVpSYEML56DB3v7KTzzIjy3XsfHf+cZMlr/f54j9qoPPF4na83S70ZVp30dotbnKQetNTWLGKxNAdUsT3BDRi9ZpXsetsclX+ijziqJaRFVaZaHwTLJo09X7rPZovBkPhFLcgMF6AUPpc5CT/JQ9ZGtsOPxpSBE9to+KoMqXa92bDrG0o1XDVp18UIfTYnrHA+YmtGSlh1P2UYouDFrMWdx7D7KVfW3E4jneLhuLwrh6U9OtUTTsgXr6OmZZz3JsTtvM8cDeSMrl507ilRnZJKu1v/ivu+5u8lj9PSa45GMzl+Wuqj0qVXVe25jbi3+nOdbX0HWQj/HQyWmLZs7Hj4nlibhnG2ffNgQ+SXPKucpdDM8dTGqraWOxx/PguVA3DVyAV/wmBLHJt/PGzbJUzO6DYUHX/OA0mP9GXmk22Ksp3hq3rqaqAqe4hOwl7YP+ZuRIvnxvMb4LJM8NaPJdWm0tPnbz91ZXpI9z+0Rx7Z0nOUpKFc2C0+pBAl+IefWYeSReimnx1M8beFHGRKeYTGOTMXLR+wWMM885LqCf5diNMPD8t/X83CXscrWW0iHbIeP+AQhX/VDC3Q6xXkeqNmphEfUFh9vDN10qVh6l7v4CPDGai8xOdXmvq4rp1NNf8ETr5e98EhQDmeSq5dbyo8JprRheOa67kHirCvNDrM8rejiyCNAY63xTnSGxofS/myx7TDL0wJuYeBpo9ReevTw0+6iYRC7Qo6jhROnzxPFiF6NOvZZR892rEaLHWbkB8k/WVSGiQ2bAAAAAElFTkSuQmCC",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(u.jsxs)("div",{className:"header__conteiner",children:["\u0412\u044b\u0439\u0442\u0438"===e.buttonName&&Object(u.jsx)("p",{className:"header__email",children:e.userEmail}),"\u0412\u044b\u0439\u0442\u0438"===e.buttonName?Object(u.jsx)("button",{className:"header__button header__button_grey",onClick:e.onClick,children:e.buttonName}):Object(u.jsx)(i.b,{to:e.toLink,className:"header__button",children:e.buttonName})]})]})};var h=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){var t=Object(a.useContext)(l);return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(j,{buttonName:"\u0412\u044b\u0439\u0442\u0438",userEmail:e.userEmail,onClick:e.onSignOut}),Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__grid",children:[Object(u.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",onClick:e.onEditAvatar}),Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAHlBMVEUAAAD///////////////////////////////////8kfJuVAAAACXRSTlMAIN+Av5BwQO9ywzheAAAARklEQVQY02NAAEZHBiQgNEkASUpzpiKS1MyZU5ClQHIIqUkCQ1WKDSwFB5ZIUswCzEhSTIoMiQh1lciaGCJnGCDxXAuQOAAhdSPfmjsjqAAAAABJRU5ErkJggg==",alt:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",className:"profile__avatar profile__avatar_edit"}),Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("p",{className:"profile__profession",children:t.about}),Object(u.jsx)("button",{type:"button",className:"profile__button-edit",onClick:e.onEditProfile})]}),Object(u.jsx)("button",{type:"button",className:"profile__button-add",onClick:e.onAddPlace})]}),Object(u.jsx)("ul",{className:"elements",children:e.cards.map((function(t,n){return Object(u.jsx)(d,{card:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick},t._id)}))})]}),Object(u.jsx)(h,{})]})},m=n(8),_=n(22),O=n(23),f=new(function(){function e(){Object(_.a)(this,e),this._baseUrl="".concat(window.location.protocol).concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"//localhost:3001"),this._usersMe="/users/me",this._cards="/cards",this._likes="/cards/likes",this._avatar="/users/me/avatar",this._signIn="/signin",this._signUp="/signup"}return Object(O.a)(e,[{key:"register",value:function(e,t){return fetch(this._baseUrl+this._signUp,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(this._checkResponse)}},{key:"authorize",value:function(e,t){return fetch(this._baseUrl+this._signIn,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(this._checkResponse)}},{key:"setToken",value:function(e){this._headers=Object(m.a)(Object(m.a)({},this.headers),{},{Authorization:"Bearer ".concat(e)})}},{key:"getContent",value:function(e){return fetch(this._baseUrl+this._usersMe,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch(this._baseUrl+this._cards,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getUsersInfo",value:function(){return fetch(this._baseUrl+this._usersMe,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"patchUsersInfo",value:function(e){return fetch(this._baseUrl+this._usersMe,{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch(this._baseUrl+this._cards,{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl).concat(this._cards,"/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n=t?"PUT":"DELETE";return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:n,headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl).concat(this._likes,"/").concat(e),{method:"PUT",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl).concat(this._likes,"/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"patchAvatar",value:function(e){return fetch(this._baseUrl+this._avatar,{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}}]),e}());var g=function(e){return Object(u.jsx)("div",{className:"popup popup_view ".concat(e.card&&"popup_opened"),id:"view",children:Object(u.jsxs)("div",{className:"popup__grid",children:[Object(u.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(u.jsx)("div",{className:"popup__form popup__form_view",children:Object(u.jsxs)("figure",{className:"popup__image-conteiner",children:[null!==e.card?Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)("figcaption",{className:"popup__caption",children:null!==e.card&&e.card.name})]})})]})})};var v=function(e){return Object(u.jsx)("form",{name:e.name,id:e.name,onSubmit:e.onSubmit,className:"auth"===e.type?"popup__form popup__form_view":"popup__form",noValidate:!0,children:Object(u.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(u.jsx)("legend",{className:"auth"===e.type?"popup__title popup__title_black":"popup__title",children:e.title}),e.children,Object(u.jsx)("button",{type:"submit",className:"auth"===e.type?"popup__button popup__button_white":"popup__button",children:"yes"===e.id?"\u0414\u0430":"auth"===e.type?e.title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),"register"===e.id&&Object(u.jsx)(i.b,{to:"/sign-in",className:"popup__button popup__button_sing_in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})};var x=function(e){return Object(u.jsx)("div",{className:e.isOpen?"popup popup_opened":"popup",id:e.id,children:Object(u.jsxs)("div",{className:"popup__grid",children:[Object(u.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(u.jsx)(v,{name:e.name,onSubmit:e.onSubmit,title:e.title,children:e.children,id:e.id})]})})};var A=function(e){var t=Object(a.useState)("\u0438\u043c\u044f"),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)("\u0438\u043d\u0444\u0430"),i=Object(p.a)(s,2),r=i[0],d=i[1],j=Object(a.useContext)(l);Object(a.useEffect)((function(){o(j.name),d(j.about)}),[j]);var h=function(e){"name"===e.target.id?o(e.target.value):d(e.target.value)};return Object(u.jsx)(x,{id:"edit",name:"info",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:r})},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",required:!0,className:"popup__input",name:"popup-name",id:"name",minLength:"2",maxLength:"40",value:c||"",onChange:h}),Object(u.jsx)("span",{className:"popup__error",id:"name-error"}),Object(u.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,className:"popup__input popup__input_type_description",name:"popup-profession",id:"info",minLength:"2",maxLength:"200",value:r||"",onChange:h}),Object(u.jsx)("span",{className:"popup__error",id:"info-error"})]})})};var C=function(e){var t=Object(a.useRef)();return Object(u.jsx)(x,{id:"updata",name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",required:!0,className:"popup__input popup__input_type_description",name:"photo-link",id:"link",type:"url",ref:t}),Object(u.jsx)("span",{className:"popup__error",id:"link-error"})]})})};var N=function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),i=Object(p.a)(s,2),r=i[0],l=i[1],d=function(e){"picture"===e.target.id?o(e.target.value):l(e.target.value)};return Object(u.jsxs)(x,{id:"add",name:"photo",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateCards({name:c,link:r}),o(""),l("")},children:[Object(u.jsx)("input",{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,className:"popup__input",name:"photo-name",id:"picture",minLength:"1",maxLength:"30",value:c||"",onChange:d}),Object(u.jsx)("span",{className:"popup__error",id:"picture-error"}),Object(u.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",required:!0,className:"popup__input popup__input_type_description",name:"photo-link",id:"link",type:"url",value:r||"",onChange:d}),Object(u.jsx)("span",{className:"popup__error",id:"link-error"})]})},k=n(11);var S=function(e){var t=Object(a.useState)({email:e.data.email,password:""}),n=Object(p.a)(t,2),c=n[0],o=n[1],s=function(e){var t=e.target,n=t.name,a=t.value;o(Object(m.a)(Object(m.a)({},c),{},Object(k.a)({},n,a)))};return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(j,{buttonName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",toLink:"/sign-up"}),Object(u.jsx)("div",{className:"popup popup_auth popup_opened",children:Object(u.jsxs)(v,{type:"auth",id:"login",name:"log_in",title:"\u0412\u0445\u043e\u0434",onSubmit:function(t){t.preventDefault(),e.onLogin(c.email,c.password)},children:[Object(u.jsx)("input",{placeholder:"Email",required:!0,className:"popup__input popup__input_black",name:"email",id:"email",type:"email",value:c.email||"",onChange:s}),Object(u.jsx)("span",{className:"popup__error",id:"email-error"}),Object(u.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,className:"popup__input popup__input_black",name:"password",id:"password",type:"password",value:c.password||"",onChange:s}),Object(u.jsx)("span",{className:"popup__error",id:"password-error"})]})})]})};var y=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(p.a)(t,2),c=n[0],o=n[1],s=function(e){var t=e.target,n=t.name,a=t.value;o(Object(m.a)(Object(m.a)({},c),{},Object(k.a)({},n,a)))};return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(j,{buttonName:"\u0412\u043e\u0439\u0442\u0438",toLink:"/sign-in"}),Object(u.jsx)("div",{className:"popup popup_auth popup_opened",children:Object(u.jsxs)(v,{type:"auth",id:"register",name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(t){t.preventDefault(),e.onRegister(c.email,c.password)},children:[Object(u.jsx)("input",{placeholder:"Email",required:!0,className:"popup__input popup__input_black",name:"email",id:"email",type:"email",value:c.email||"",onChange:s}),Object(u.jsx)("span",{className:"popup__error",id:"email-error"}),Object(u.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,className:"popup__input popup__input_black",name:"password",id:"password",type:"password",value:c.password||"",onChange:s}),Object(u.jsx)("span",{className:"popup__error",id:"password-error"})]})})]})};var w=function(e){return Object(u.jsx)("div",{className:"popup popup_view ".concat(e.isOpen&&"popup_opened"),id:"info",children:Object(u.jsxs)("div",{className:"popup__grid",children:[Object(u.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(u.jsx)("div",{className:"popup__form",children:Object(u.jsxs)("figure",{className:"popup__image-conteiner",children:["fail"===e.typeInfo?Object(u.jsx)("div",{className:"popup__image popup__image_fail"}):Object(u.jsx)("div",{className:"popup__image popup__image_success"}),Object(u.jsx)("figcaption",{className:"popup__title",children:"fail"===e.typeInfo?"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.":"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})]})})},T=n(2),U=n(25),E=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(u.jsx)(T.b,{children:function(){return!0===n.loggedIn?Object(u.jsx)(t,Object(m.a)({},n)):Object(u.jsx)(T.a,{to:"./sing-in"})}})};var R=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({email:""}),s=Object(p.a)(o,2),i=s[0],d=s[1],j=Object(T.g)(),h=Object(a.useState)(!1),m=Object(p.a)(h,2),_=m[0],O=m[1],v=Object(a.useState)(null),x=Object(p.a)(v,2),k=x[0],U=x[1],R=Object(a.useState)({name:"",about:"",avatar:""}),L=Object(p.a)(R,2),P=L[0],D=L[1],I=Object(a.useState)(!1),B=Object(p.a)(I,2),M=B[0],q=B[1],z=Object(a.useState)(!1),F=Object(p.a)(z,2),G=F[0],H=F[1],V=Object(a.useState)(!1),Z=Object(p.a)(V,2),J=Z[0],Q=Z[1],X=Object(a.useState)(null),K=Object(p.a)(X,2),W=K[0],Y=K[1],$=Object(a.useState)([]),ee=Object(p.a)($,2),te=ee[0],ne=ee[1];if(Object(a.useEffect)((function(){n&&j.push("/")}),[n,j]),Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&(f.setToken(e),f.getCards().then((function(e){ne(e.data)})).catch((function(e){console.log(e)})))}),[n,j]),Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&(f.setToken(e),f.getUsersInfo().then((function(e){D(e.data)})).catch((function(e){console.log(e)})))}),[n,i]),Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e?f.getContent(e).then((function(e){e&&(d({email:e.data.email}),c(!0))})).catch((function(e){console.error(e),c(!1)})):c(!1)}),[]),null===n)return"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...";function ae(){q(!1),H(!1),Q(!1),Y(null),O(!1)}return Object(u.jsxs)(l.Provider,{value:P,children:[Object(u.jsxs)(T.d,{children:[Object(u.jsx)(E,{exact:!0,path:"/",loggedIn:n,userEmail:i.email,component:b,onSignOut:function(){c(!1),localStorage.removeItem("jwt")},onEditProfile:function(){q(!0)},onAddPlace:function(){H(!0)},onEditAvatar:function(){Q(!0)},onCardClick:function(e){return Y(e)},cards:te,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===P._id}));f.changeLikeCardStatus(e._id,!t).then((function(t){var n=te.map((function(n){return n._id===e._id?t.data:n}));ne(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){f.deleteCard(e._id).then((function(t){var n=te.filter((function(n,a,c){return n._id!==e._id&&t}));ne(n)})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(T.b,{path:"/sign-in",children:Object(u.jsx)(S,{onLogin:function(e,t){f.authorize(e,t).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),c(!0),O(!1),d({email:e})),400===t.statusCode&&(O(!0),U("fail"))})).catch((function(e){console.log("\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),O(!0),U("fail")}))},data:i})}),Object(u.jsx)(T.b,{path:"/sign-up",children:Object(u.jsx)(y,{onRegister:function(e,t){f.register(e,t).then((function(e){if(j.push("/sing-in"),O(!0),U("success"),400===e.statusCode)throw O(!0),U("fail"),new Error("\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")})).catch((function(e){O(!0),U("fail")}))}})}),Object(u.jsx)(T.b,{children:n?Object(u.jsx)(T.a,{to:"/"}):Object(u.jsx)(T.a,{to:"/sign-in"})})]}),Object(u.jsx)(A,{isOpen:M,onClose:ae,onUpdateUser:function(e){f.patchUsersInfo(e).then((function(e){D(e.data),ae()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(C,{isOpen:J,onClose:ae,onUpdateAvatar:function(e){f.patchAvatar(e).then((function(e){d(e),D(e),ae()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(N,{isOpen:G,onClose:ae,onUpdateCards:function(e){f.postCard(e).then((function(e){ne([e.data].concat(Object(r.a)(te))),j.push("/"),c(!0),ae()})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(g,{card:W,onClose:ae}),Object(u.jsx)(w,{isOpen:_,typeInfo:k,onClose:ae})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(R,{})})}),document.getElementById("root")),L()}},[[37,1,2]]]);
//# sourceMappingURL=main.3388344f.chunk.js.map