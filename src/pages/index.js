﻿'use strict';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import validationOptions from '../utils/validateOptions.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import './index.css';

const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');
const selectorTemplateCard = '#card-item';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-66/',
  headers: {
    'Content-Type': 'application/json',
    authorization: '4d34c841-0266-4e27-9ed8-f76bb6fb7087',
  },
});

//обращаемся к классу для создания элемента вставки на страницу
const allCards = new Section('.cards');

//создаём экземпляр класса попапа с формой для добовления места
const popupAddCard = new PopupWithForm(
  '#popup-add-card',
  handlePlaceFormSubmit
);

//создаём экземпляр класса для попапа с картинкой места
const popupOpenImage = new PopupWithImage('#popup-image');

//создаём экземпляр класса для попапа подтверждения удаления места
const popupDelCard = new PopupDeleteCard('.popup_delete', api);

//создаём экземпляр класса попапа с формой для редактирования профиля
const popupEditUser = new PopupWithForm(
  '#popup-edit-user',
  handleProfileFormSubmit
);

const inputName = popupEditUser.form.querySelector('#input-user-name');
const inputEmployment = popupEditUser.form.querySelector(
  '#input-user-employment'
);

const validationPopupEditUser = new FormValidator(
  validationOptions,
  popupEditUser.form
);

const validationPopupAddCard = new FormValidator(
  validationOptions,
  popupAddCard.form
);

const userInfo = new UserInfo(
  {
    selectorName: '#profile__username',
    selectorEmployment: '#profile__employment',
  },
  api
);

//включаем валидацию
validationPopupEditUser.enableValidation();
validationPopupAddCard.enableValidation();

//функция возвращающая экземпляр класса Card
const createCard = (item, selectorTemplateCard, renderPopup, ownerPageId) => {
  const newCard = new Card(
    item,
    selectorTemplateCard,
    renderPopup,
    ownerPageId,
    popupDelCard,
    api
  );
  return newCard.render();
};

//информацию о пользователе с сервера
api.getInfoUser().then((data) => {
  userInfo.setUserInfo({
    name: data.name,
    employment: data.about,
  });
});

//взять карты с сервера
api.getCard().then((data) => {
  const dataCard = data;
  //берем информацию о пользователе что бы потом сравнить id
  api.getInfoUser().then((data) => {
    //вставляем готовый элемент на страницу
    allCards.renderCards({
      items: dataCard.reverse(),
      renderer: (item) => {
        return createCard(
          item,
          selectorTemplateCard,
          renderPopupImage,
          data._id
        );
      },
    });
  });
});

// обработчик кнопки принять в форме добавления места
function handlePlaceFormSubmit({ inputPlaceName, inputURLImage }) {
  api.setNewCadr({ name: inputPlaceName, link: inputURLImage }).then((res) => {
    const card = createCard(
      res,
      selectorTemplateCard,
      renderPopupImage,
      res.owner._id
    );
    allCards.addItem(card);
  });
}

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit({ inputUserName, inputUserEmployment }) {
  api.setUserData({ name: inputUserName, about: inputUserEmployment }).then(
    userInfo.setUserInfo({
      name: inputUserName,
      employment: inputUserEmployment,
    })
  );
}

//функция открытия попапа
function renderPopupImage(data) {
  popupOpenImage.open(data);
}

//устанавливаем слушатели для экземпляра попапа добовления места
popupAddCard.setEventListeners();
//устанавливаем слушатель на кнопку открытия попапа с добовлением места
buttonAdd.addEventListener('click', () => {
  validationPopupAddCard.resetErrorInputs();
  popupAddCard.open();
});
//устанавливаем слушатели для экземпляра попапа редактирования профиля
popupEditUser.setEventListeners();
//устанавливаем слушатель на кнопку открытия попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
  api.getInfoUser().then((data) => {
    inputName.value = data.name;
    inputEmployment.value = data.about;
    validationPopupEditUser.resetErrorInputs();
  });
  popupEditUser.open();
});
//устанавливаем слушатели на попап с картинкой
popupOpenImage.setEventListeners();
