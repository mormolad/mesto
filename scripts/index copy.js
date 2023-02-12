'use strict';

const buttonEdit = document.querySelector('#profile__edit-button');

const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');

const popupUser = document.querySelector('#popup-user');
const userNameInput = document.querySelector('#popup-user__username');
const employmentInput = document.querySelector('#popup-user__employment');
const buttonSubmit = document.querySelector('#popup-user__content');
const buttonClose = document.querySelector('#popup-user__close-popup');
const body = document.querySelector('.page');

buttonEdit.addEventListener('click', showPopup);
buttonClose.addEventListener('click', closingPopup);
buttonSubmit.addEventListener('submit', submitingPopup);

function showPopup() {
  userNameInput.value = userName.textContent;
  employmentInput.value = employment.textContent;
  popupUser.style.opacity = 1;
  popupUser.style.visibility = 'visible';
}

function closingPopup() {
  popupUser.style.opacity = 0;
  setTimeout(() => {
    popupUser.style.visibility = 'hidden';
  }, 1000);
}

function submitingPopup(evt) {
  evt.preventDefault();
  if (userNameInput.value !== '' && employmentInput.value !== '') {
    userName.textContent = userNameInput.value;
    employment.textContent = employmentInput.value;
  }
  closingPopup();
}

let addButtom = document.querySelector('#profile__add-button');

let place = null;
let urlImage = null;

const popupPlace = document.querySelector('#popup-place');
const popupPlaceName = document.querySelector('#popup-place-name');
const popupUrlImage = document.querySelector('#popup-place-url-image');
const buttonSubmitAdd = document.querySelector('#popup-place__content');
const buttonCloseAdd = document.querySelector('#popup-place__close-popup');

addButtom.addEventListener('click', showPopupPlace);
buttonCloseAdd.addEventListener('click', closingPopupPlace);
buttonSubmitAdd.addEventListener('submit', submitingPopupPlace);

function showPopupPlace() {
  popupPlace.style.opacity = 1;
  popupPlace.style.visibility = 'visible';
}

function closingPopupPlace() {
  popupPlace.style.opacity = 0;
  setTimeout(() => {
    popupPlace.style.visibility = 'hidden';
  }, 1000);
}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  const card = {
    name: popupPlaceName.value,
    link: popupUrlImage.value,
  };
  addCard(card);

  closingPopupPlace();
}

const cards = document.querySelector('.cards');

function addCard(item) {
  const card = document.querySelector('#card-item').content;
  const insertedCard = card.querySelector('.card').cloneNode(true);
  insertedCard.querySelector('.card__mesto').textContent = item.name;
  const image = insertedCard.querySelector('.card__mask-card');
  image.src = item.link;
  image.addEventListener('click', (evt) => {
    const popupImage = document.querySelector('#popup-image').content;
    const openPopup = popupImage.querySelector('#popup-image__overlay').cloneNode(true);
    openPopup.querySelector('#popup-image__image-popup').src = item.link;
    openPopup.querySelector('#popup-image__title').textContent = item.name;
    const closeButtonPopupImage = openPopup.querySelector('#popup-image__close-popup');
    closeButtonPopupImage.addEventListener('click', (evt) => {
      openPopup.style.opacity = '0';
      setTimeout(() => {
        openPopup.remove();
      }, 500);
    });
    body.append(openPopup);

    setTimeout(() => {
      openPopup.style.opacity = '1';
      openPopup.style.visibility = 'visible';
    }, 100);
  });

  cards.prepend(insertedCard);
  const basket = document.querySelector('#card-del-card');
  basket.addEventListener('click', (evt) => {
    insertedCard.remove();
  });
}

function fillWithCards() {
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

const basket = document.querySelectorAll('#card-del-card');

basket.forEach((item) => {
  const cardRemoved = item.parentNode;
  item.addEventListener('click', (evt) => {
    cardRemoved.remove();
  });
});
