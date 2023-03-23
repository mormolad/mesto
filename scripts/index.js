'use strict';
const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');

const popupEditUser = document.querySelector('#popup-edit-user');
const inputName = popupEditUser.querySelector('#input-user-name');
const inputEmployment = popupEditUser.querySelector('#input-user-employment');
const formEditUser = popupEditUser.querySelector('#content-popup-edit-user');
const buttonSubmitEditUser = formEditUser.querySelector('#button-submit-popup-edit-user');

const popupAddCard = document.querySelector('#popup-add-card');
const inputNamePlace = popupAddCard.querySelector('#input-place-name');
const inputUrlImagePlace = popupAddCard.querySelector('#input-url-image-place');
const formAddCard = popupAddCard.querySelector('#content-popup-add-card');
const buttonSubmitAddCard = formAddCard.querySelector('#button-submit-popup-add-card');

const overlayPopups = document.querySelectorAll('.popup');

import Card from '../modules/Card.js';
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

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = new Card({ name: inputNamePlace.value, link: inputUrlImagePlace.value });
  cardsContainer.prepend(card.render());
  closePopup(popupAddCard);
  evt.target.reset();
}
// показать всплывающее окно добавления карточки
function showPopupAddCard() {
  showPopup(popupAddCard); //?
}

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  employment.textContent = inputEmployment.value;
  closePopup(popupEditUser);
}
// показать всплывающее окно редактирования информации о пользователе
function showPopupEditUser() {
  inputName.value = userName.textContent;
  inputEmployment.value = employment.textContent; //?
  showPopup(popupEditUser);
}
// убрать всплывающее окно
function closePopup(element) {
  window.removeEventListener('keydown', closePopupWithKeyEsc);
  element.classList.remove('popup_enable');
}
//показать всплывающее окно
function showPopup(element) {
  element.classList.add('popup_enable');
  window.addEventListener('keydown', closePopupWithKeyEsc);
}
//закрытие всплывающего окна при нажатии вне его пространства
function closePopupClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}
//закрытие всплывающего окна при нажатии Esc
function closePopupWithKeyEsc(currentEvt) {
  if (currentEvt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_enable');
    closePopup(openedPopup);
  }
}

buttonEdit.addEventListener('click', showPopupEditUser);
buttonAdd.addEventListener('click', showPopupAddCard);
formEditUser.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handlePlaceFormSubmit);
overlayPopups.forEach((item) => {
  item.addEventListener('mousedown', closePopupClickOnOverlay);
});
const closeButtons = document.querySelectorAll('.popup__close-popup');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
