'use strict';


const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttomAdd = document.querySelector('#profile__add-button');

const popupEditUser = document.querySelector('#popup-edit-user');
const field1InputEditUser = popupEditUser.querySelector('#field1-edit-user');
const field2InputEditUser = popupEditUser.querySelector('#field2-edit-user');
const buttonSubmitEditUser = popupEditUser.querySelector('#button-submit-popup-edit-user');
const buttonCloseEditUser = popupEditUser.querySelector('#button-close-popup-edit-user');

const popupAddCard = document.querySelector('#popup-add-card');
const field1InputAddCard = popupAddCard.querySelector('#field1-add-card');
const field2InputAddCard = popupAddCard.querySelector('#field2-add-card');
const buttonSubmitAddCard = popupAddCard.querySelector('#button-submit-popup-add-card');
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

function submitingPopupUser(evt) {
  evt.preventDefault();
  userName.textContent = field1InputEditUser.value;
  employment.textContent = field2InputEditUser.value;
  closePopupEditUser();
  field1InputEditUser.value = null;
  field2InputEditUser.value = null;
}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  const card = {
    name: field1InputAddCard.value,
    link: field2InputAddCard.value,
  };
  cardsContainer.prepend(makingCard(card));
  closePopupAddCard();
  field1InputAddCard.value = null;
  field2InputAddCard.value = null;
}

function showPopupAddCard() {
  popupAddCard.classList.add('popup_enable');
}

function closePopupAddCard() {
  popupAddCard.classList.remove('popup_enable');
}

function makingCard(item) {
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
  showPopupImage();
}

function closePopupImage() {
  popupImage.classList.remove('popup-image_enable');
}

function showPopupImage() {
  popupImage.classList.add('popup-image_enable');
}

function showPopupEditUser() {
  popupEditUser.classList.add('popup_enable');
}

function closePopupEditUser() {
  popupEditUser.classList.remove('popup_enable');
}

initialCards.forEach((item) => {
  cardsContainer.append(makingCard(item));
});

buttonEdit.addEventListener('click', showPopupEditUser);
buttomAdd.addEventListener('click', showPopupAddCard);
buttonCloseEditUser.addEventListener('click', closePopupEditUser);
buttonCloseAddCard.addEventListener('click', closePopupAddCard);
buttonClosePopupImage.addEventListener('click', closePopupImage);
buttonSubmitAddCard.addEventListener('click', submitingPopupPlace);
buttonSubmitEditUser.addEventListener('click', submitingPopupUser);













