'use strict';

const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttomAdd = document.querySelector('#profile__add-button');

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

function checkForValidity(arrayOfElements) {
  const arrayOfStateField = [];
  for (let i = 0; i < arrayOfElements.length; i++) {
    arrayOfStateField[i] = arrayOfElements[i].validity.valid;
  }
  return !arrayOfStateField.some((element) => {
    return element === false;
  });
}
function hideButton(buttonForm) {
  buttonForm.classList.add('popup__submit_disable');
  buttonForm.setAttribute('disabled', true);
}
function showButton(buttonForm) {
  buttonForm.removeAttribute('disabled', false);
  buttonForm.classList.remove('popup__submit_disable');
}
function switchStateButton(item) {
  return checkForValidity(item.currentTarget.querySelectorAll('.popup__field'));
}

function rrrr(tttt) {

}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  const card = {
    name: inputNamePlace.value,
    link: inputUrlImagePlace.value,
  };
  cardsContainer.prepend(createCard(card));
  closePopup(popupAddCard);
  inputNamePlace.value = null;
  inputUrlImagePlace.value = null;
}
function showPopupAddCard() {
  showPopup(popupAddCard);
  hideButton(buttonSubmitAddCard);
}
function closePopupAddCard() {
  closePopup(popupAddCard);
}
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

function renderPopupImage(evt) {
  imagePopupImages.src = evt.srcElement.src;
  imagePopupImages.alt = evt.srcElement.alt;
  titlePopupImages.textContent = evt.srcElement.alt;
  showPopup(popupImage);
}
function closePopupImage() {
  closePopup(popupImage);
}

function submitingPopupUser(evt) {
  evt.preventDefault();
  userName.textContent = inputName.value;
  employment.textContent = inputEmployment.value;
  closePopupEditUser();
  inputName.value = null;
  inputEmployment.value = null;
}
function showPopupEditUser() {
  inputName.placeholder = userName.textContent;
  inputEmployment.placeholder = employment.textContent;
  showPopup(popupEditUser);
}
function closePopupEditUser() {
  closePopup(popupEditUser);
  hideButton(buttonSubmitEditUser);
}

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item));
});

function closePopup(element) {
  window.removeEventListener('keydown', closePopupWithKeyEsc);
  element.classList.remove('popup_enable');
}
function showPopup(element) {
  element.classList.add('popup_enable');
  window.addEventListener('keydown', (evt) => {
    closePopupWithKeyEsc(evt, element);
  });
}

function closePopupClickOnOverlay(currentPopup) {
  if (currentPopup.currentTarget === currentPopup.target) {
    closePopup(currentPopup.target);
  }
}

function closePopupWithKeyEsc(currentEvt, popup) {
  if (currentEvt.keyCode === 27) {
    closePopup(popup);
  }
}

buttonEdit.addEventListener('click', showPopupEditUser);
buttomAdd.addEventListener('click', showPopupAddCard);
buttonCloseEditUser.addEventListener('click', closePopupEditUser);
buttonCloseAddCard.addEventListener('click', closePopupAddCard);
buttonClosePopupImage.addEventListener('click', closePopupImage);
formAddCard.addEventListener('submit', submitingPopupPlace);
formEditUser.addEventListener('submit', submitingPopupUser);
overlayPopups.forEach((item) => {
  item.addEventListener('mousedown', closePopupClickOnOverlay);
});
popupEditUser.addEventListener('input', (ivt) => {
  switchStateButton(ivt) ? showButton(buttonSubmitEditUser) : hideButton(buttonSubmitEditUser);
});
popupAddCard.addEventListener('input', (ivt) => {
  switchStateButton(ivt) ? showButton(buttonSubmitAddCard) : hideButton(buttonSubmitAddCard);
});
