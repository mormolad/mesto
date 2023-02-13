'use strict';

const buttonEdit = document.querySelector('#profile__edit-button');

const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');

const popup = document.querySelector('#popup');
const titlePopup = document.querySelector('#popup-title');
const field1Input = document.querySelector('#popup__field1');
const field2Input = document.querySelector('#popup__field2');
const buttonSubmit = document.querySelector('#popup__content');
const buttonClose = document.querySelector('#popup__close-popup');

const buttomAdd = document.querySelector('#profile__add-button');

const body = document.querySelector('.page');

const card = document.querySelector('#card-item').content;
const popupImage = document.querySelector('#popup-image');
const imagePopupImages = document.querySelector('#popup-image__image-popup');
const titlePopupImages = document.querySelector('#popup-image__title');
const buttonClosePopupImage = document.querySelector('#popup-image__close-popup');

const cardsContainer = document.querySelector('.cards');
const insertedCard = card.querySelector('.card');
const cardTemplate = document.querySelector('#card-item').content;

buttonEdit.addEventListener('click', renderPopupdUser);
buttonClose.addEventListener('click', closePopup);
buttomAdd.addEventListener('click', renderPopupPlace);
buttonClosePopupImage.addEventListener('click', closePopupImage);

function renderPopupdUser() {
  titlePopup.innerText = 'Редактировать профиль';
  field1Input.placeholder = userName.textContent;
  field2Input.placeholder = employment.textContent;
  field2Input.type = 'text';
  buttonSubmit.addEventListener('submit', submitingPopupUser);
  showPopup(popup);
}

function submitingPopupUser(evt) {
  evt.preventDefault();
  userName.textContent = field1Input.value;
  employment.textContent = field2Input.value;
  buttonSubmit.removeEventListener('submit', submitingPopupUser);
  closePopup();
  field1Input.value = null;
  field2Input.value = null;
}

function showPopup() {
  popup.classList.add('popup_enable');
}

function closePopup() {
  popup.classList.remove('popup_enable');
}

function renderPopupPlace() {
  titlePopup.innerText = 'Новое место';
  field1Input.placeholder = 'Название нового места';
  field2Input.placeholder = 'URL картинки';
  field2Input.type = 'URL';
  buttonSubmit.addEventListener('submit', submitingPopupPlace);
  showPopup(popup);
}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  const card = {
    name: field1Input.value,
    link: field2Input.value,
  };
  cardsContainer.prepend(makingCard(card));
  buttonSubmit.removeEventListener('submit', submitingPopupPlace);
  closePopup();
  field1Input.value = null;
  field2Input.value = null;
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

initialCards.forEach((item) => {
  cardsContainer.append(makingCard(item));
});

function renderPopupImage(evt) {
  imagePopupImages.src = evt.srcElement.src;
  imagePopupImages.alt = evt.srcElement.alt;
  titlePopupImages.textContent = evt.srcElement.alt;
  button - del - card;
  console.log(evt.srcElement.alt);

  showPopupImage();
}

function closePopupImage() {
  popupImage.classList.remove('popup-image_enable');
}

function showPopupImage() {
  popupImage.classList.add('popup-image_enable');
}
