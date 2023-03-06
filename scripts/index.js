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
const buttonCloseEditUser = popupEditUser.querySelector('#button-close-popup-edit-user');

const popupAddCard = document.querySelector('#popup-add-card');
const inputNamePlace = popupAddCard.querySelector('#input-place-name');
const inputUrlImagePlace = popupAddCard.querySelector('#input-url-image-place');
const formAddCard = popupAddCard.querySelector('#content-popup-add-card');
const buttonSubmitAddCard = formAddCard.querySelector('#button-submit-popup-add-card');
const buttonCloseAddCard = popupAddCard.querySelector('#button-close-popup-add-card');

const body = document.querySelector('.page');

const card = document.querySelector('#card-item').content;
const popupImage = document.querySelector('#popup-image');
const imagePopupImages = document.querySelector('#popup-image__image-popup');
const titlePopupImages = document.querySelector('#popup-image__title');
const buttonClosePopupImage = document.querySelector('#popup-image__close-popup');

const cardsContainer = document.querySelector('.cards');
const insertedCard = card.querySelector('.card');
const cardTemplate = document.querySelector('#card-item').content;

const overlayPopups = document.querySelectorAll('.popup');

//обрботать форму добовления места при нажатии кнопки submit
function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const card = {
    name: inputNamePlace.value,
    link: inputUrlImagePlace.value,
  };
  cardsContainer.prepend(createCard(card));
  closePopup(popupAddCard);
  evt.target.reset();
  const options = { formIsInvalid: 'popup__submit_disable' };
}
// показать всплывающее окно добавления карточки
function showPopupAddCard() {
  showPopup(popupAddCard);
}
//сделать карточку и вернуть её
function createCard(item) {
  const sampleCard = cardTemplate.querySelector('.card').cloneNode(true);
  const imageCard = sampleCard.querySelector('#image-card');
  const nameCard = sampleCard.querySelector('.card__mesto');

  imageCard.src = item.link;
  imageCard.alt = item.name;
  nameCard.textContent = item.name;
  sampleCard.querySelector('#card_like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_state_active');
  });
  sampleCard.querySelector('#button-del-card').addEventListener('click', () => {
    sampleCard.remove();
  });
  imageCard.addEventListener('click', renderPopupImage);
  return sampleCard;
}
//нарисовать всплывающее окно с картинкой места
function renderPopupImage(evt) {
  imagePopupImages.src = evt.srcElement.src;
  imagePopupImages.alt = evt.srcElement.alt;
  titlePopupImages.textContent = evt.srcElement.alt;
  showPopup(popupImage);
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
  inputEmployment.value = employment.textContent;
  showPopup(popupEditUser);
}
//из коллекции добавить карточки
initialCards.forEach((item) => {
  cardsContainer.append(createCard(item));
});
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
