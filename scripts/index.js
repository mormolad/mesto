'use strict';

let editButtom = document.querySelector('#profile__edit-button');

let username = document.querySelector('#profile__username');
let employment = document.querySelector('#profile__employment');

let popupUser = document.querySelector('#popup-user');
let usernamePopup = document.querySelector('#popup-user__username');
let employmentPopup = document.querySelector('#popup-user__employment');
let submitPopup = document.querySelector('#popup-user__content');
let closePopup = document.querySelector('#popup-user__close-popup');

editButtom.addEventListener('click', showPopup);
closePopup.addEventListener('click', closingPopup);
submitPopup.addEventListener('submit', submitingPopup);

function showPopup() {
  usernamePopup.value = username.textContent;
  employmentPopup.value = employment.textContent;
  popupUser.classList.add('popup_enable');
}

function closingPopup() {
  popupUser.classList.remove('popup_enable');
}
function submitingPopup(evt) {
  evt.preventDefault();
  if (usernamePopup.value !== '' && employmentPopup.value !== '') {
    username.textContent = usernamePopup.value;
    employment.textContent = employmentPopup.value;
  }
  closingPopup();
}

let addButtom = document.querySelector('#profile__add-button');

let place = null;
let urlImage = null;

let popupPlace = document.querySelector('#popup-place');
let popupPlaceName = document.querySelector('#popup-place-name');
let popupUrlImage = document.querySelector('#popup-place-url-image');
let submitPopupAdd = document.querySelector('#popup-place__content');
let closePopupAdd = document.querySelector('#popup-place__close-popup');

addButtom.addEventListener('click', showPopupPlace);
closePopupAdd.addEventListener('click', closingPopupPlace);
submitPopupAdd.addEventListener('submit', submitingPopupPlace);

function showPopupPlace() {
  popupPlace.classList.add('popup_enable');
}

function closingPopupPlace() {
  popupPlace.classList.remove('popup_enable');
}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  if (popupPlaceName.value !== '' && popupUrlImage.value !== '') {
    const card = {
      name: popupPlaceName.value,
      link: popupUrlImage.value,
    };
    addCard(card);
  }
  closingPopupPlace();
}

const cards = document.querySelector('.cards');

function addCard(item) {
  const card = document.querySelector('#card-item').content;
  const insertedCard = card.querySelector('.card').cloneNode(true);
  insertedCard.querySelector('.card__mask-card').src = item.link;
  insertedCard.querySelector('.card__mesto').textContent = item.name;
  cards.prepend(insertedCard);
}

function fillWithCards() {
  const initialCards = [
    {
      name: 'Карачаево-Черкеск',
      link: './images/karachaevsk.jpg',
    },
    {
      name: 'Гора Эльбрус',
      link: './images/elbrus.jpg',
    },
    {
      name: 'Домбай',
      link: './images/dombai.jpg',
    },
    {
      name: 'Красноярск',
      link: './images/krasnoyarsk.jpg',
    },
    {
      name: 'Петропаловск-Камчатский',
      link: './images/petropavlovsk1.jpg',
    },
    {
      name: 'Эльтон',
      link: './images/elton.jpg',
    },
  ];
  initialCards.forEach((item) => {
    addCard(item);
  });
}
fillWithCards();

const like = document.querySelectorAll('#card_like');
like.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_state_active');
  });
});
