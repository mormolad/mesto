'use strict';
import Card from '../modules/Card.js';
import FormValidator from '../modules/FormValidator.js';
const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');

const popupEditUser = document.querySelector('#popup-edit-user');
const inputName = popupEditUser.querySelector('#input-user-name');
const inputEmployment = popupEditUser.querySelector('#input-user-employment');
const formEditUser = popupEditUser.querySelector('#content-popup-edit-user');
//const buttonSubmitEditUser = formEditUser.querySelector('#button-submit-popup-edit-user');

const popupAddCard = document.querySelector('#popup-add-card');
const inputNamePlace = popupAddCard.querySelector('#input-place-name');
const inputUrlImagePlace = popupAddCard.querySelector('#input-url-image-place');
const formAddCard = popupAddCard.querySelector('#content-popup-add-card');
//const buttonSubmitAddCard = formAddCard.querySelector('#button-submit-popup-add-card');

const overlayPopups = document.querySelectorAll('.popup');

const initialCards = [
  {
    name: 'Карачаево-Черкеск',
    link: './images/karachaevsk_X.jpg',
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elbrus_X.jpg',
  },
  {
    name: 'Домбай',
    link: './images/dombai_X.jpg',
  },
  {
    name: 'Красноярск',
    link: './images/krasnoyarsk_X.jpg',
  },
  {
    name: 'Петропаловск-Камчатский',
    link: './images/petropavlovsk_X.jpg',
  },
  {
    name: 'Эльтон',
    link: './images/elton_X.jpg',
  },
];

const cardsContainer = document.querySelector('.cards');

initialCards.forEach((item) => {
  const card = new Card(item);
  cardsContainer.append(card.render());
});

// селекторы для робрабокти форм
const validationOptions = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disable',
  inputSectionSelector: '.popup__form-section',
  inputErrorSelector: '.popup__message-error',
  inputErrorClass: 'popup__field_state-invalid',
  formIsInvalid: 'popup__submit_disable',
};

const validition = new FormValidator(validationOptions);
validition.enableValidation();

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = new Card({ name: inputNamePlace.value, link: inputUrlImagePlace.value });
  cardsContainer.prepend(card.render());
  Card.closePopup(popupAddCard);
}
// показать всплывающее окно добавления карточки
function showPopupAddCard() {
  Card.showPopup(popupAddCard);
}

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  employment.textContent = inputEmployment.value;
  Card.closePopup(popupEditUser);
}
// показать всплывающее окно редактирования информации о пользователе
function showPopupEditUser() {
  inputName.value = userName.textContent;
  inputEmployment.value = employment.textContent; //?
  Card.showPopup(popupEditUser);
}

//закрытие всплывающего окна при нажатии вне его пространства
function closePopupClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    Card.closePopup(evt.target);
  }
}

buttonEdit.addEventListener('click', showPopupEditUser);
buttonAdd.addEventListener('click', showPopupAddCard);
formEditUser.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handlePlaceFormSubmit);
overlayPopups.forEach((item) => {
  item.addEventListener('mousedown', closePopupClickOnOverlay);
});
const closeButtons = [document.querySelector('#popup-edit-user'), document.querySelector('#popup-add-card')];
closeButtons.forEach((popup) => {
  const buttonClose = popup.querySelector('.popup__close-popup');
  buttonClose.addEventListener('click', closePopupButtonClose);
});

function closePopupButtonClose(evt) {
  const popup = evt.target.closest('.popup');
  Card.closePopup(popup);
}
