'use strict';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import validationOptions from '../components/validateOptions.js';
import initialCards from '../components/dataCard.js';
const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');

const popupEditUser = document.querySelector('#popup-edit-user');
const inputName = popupEditUser.querySelector('#input-user-name');
const inputEmployment = popupEditUser.querySelector('#input-user-employment');
const formEditUser = popupEditUser.querySelector('#content-popup-edit-user');
//const inputFormEditUser = formEditUser.querySelectorAll('.popup__field');

const popupAddCard = document.querySelector('#popup-add-card');
const inputNamePlace = popupAddCard.querySelector('#input-place-name');
const inputUrlImagePlace = popupAddCard.querySelector('#input-url-image-place');
const formAddCard = popupAddCard.querySelector('#content-popup-add-card');
//const inputFormAddCard = formAddCard.querySelectorAll('.popup__field');

const imagePopupImages = document.querySelector('#popup-image__image-popup');
const titlePopupImages = document.querySelector('#popup-image__title');
const popupImage = document.querySelector('#popup-image');

const overlayPopups = document.querySelectorAll('.popup');

const cardsContainer = document.querySelector('.cards');
const selectorTemplateCard = '#card-item';
const forms = Array.from(document.querySelectorAll(validationOptions.formSelector));

// показать попап с картинкой
const renderPopupImage = (evt) => {
  imagePopupImages.src = evt.srcElement.src;
  imagePopupImages.alt = evt.srcElement.alt;
  titlePopupImages.textContent = evt.srcElement.alt;
  showPopup(popupImage);
};
const validation = forms.map((item) => new FormValidator(validationOptions, item, renderPopupImage));

// заполнить class="cards" картачками
initialCards.forEach((item) => {
  const card = new Card(item, selectorTemplateCard, renderPopupImage);
  cardsContainer.append(card.render());
});

//включаем валидацию
validation.forEach((item) => item.enableValidation());

// обработчик кнопки принять в форме добавления места
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = new Card({ name: inputNamePlace.value, link: inputUrlImagePlace.value }, selectorTemplateCard, renderPopupImage);
  cardsContainer.prepend(card.render());
  closePopup(popupAddCard);
  formAddCard.reset();
}

// показать всплывающее окно добавления карточки
function showPopupAddCard() {
  showPopup(popupAddCard);
}

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  employment.textContent = inputEmployment.value;
  closePopup(popupEditUser);
  formEditUser.reset();
}
// показать всплывающее окно редактирования информации о пользователе
function showPopupEditUser() {
  inputName.value = userName.textContent;
  inputEmployment.value = employment.textContent; //?
  showPopup(popupEditUser);
}

//закрытие всплывающего окна при нажатии вне его пространства
function closePopupClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target);
  }
}

// //обнулить поля ошибок при закрытии окна
// function resetErrorInput(form) {
//   form.querySelectorAll('.popup__message-error').forEach((item) => (item.innerText = ''));
//   form.querySelectorAll('.popup__field').forEach((item) => item.classList.remove('popup__field_state-invalid'));
//   if (form.querySelector('.popup__submit')) {
//     form.querySelector('.popup__submit').removeAttribute('disabled');
//     form.querySelector('.popup__submit').classList.remove('popup__submit_disable');

//   }
// }

//закрыть всплывающее окно
function closePopup(element) {
  window.removeEventListener('keydown', closePopupWithKeyEsc);
  element.classList.remove('popup_enable');
}
//показать всплывающее окно
function showPopup(element) {
  element.classList.add('popup_enable');
  window.addEventListener('keydown', closePopupWithKeyEsc);
}

//закрытие всплывающего окна при нажатии Esc
function closePopupWithKeyEsc(currentEvt) {
  if (currentEvt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_enable');
    closePopup(openedPopup);
  }
}

// закрыть попап крестиком
function closePopupButtonClose(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

//установка слушателей
buttonEdit.addEventListener('click', showPopupEditUser);
buttonAdd.addEventListener('click', showPopupAddCard);
formEditUser.addEventListener('submit', handleProfileFormSubmit);
formAddCard.addEventListener('submit', handlePlaceFormSubmit);
overlayPopups.forEach((item) => {
  item.addEventListener('mousedown', closePopupClickOnOverlay);
});
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  const buttonClose = popup.querySelector('.popup__close-popup');
  buttonClose.addEventListener('click', closePopupButtonClose);
});
