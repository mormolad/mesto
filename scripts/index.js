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

buttonEdit.addEventListener('click', renderPopupdUser);
buttonClose.addEventListener('click', closePopup);
buttomAdd.addEventListener('click', renderPopupPlace);

function renderPopupdUser() {
  titlePopup.innerText = 'Редактировать профиль';
  field1Input.placeholder = userName.textContent;
  field2Input.placeholder = employment.textContent;
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
  buttonSubmit.addEventListener('submit', submitingPopupPlace);
  showPopup(popup);
}

function submitingPopupPlace(evt) {
  evt.preventDefault();
  const card = {
    name: field1Input.value,
    link: field2Input.value,
  };
  addCard(card);
  buttonSubmit.removeEventListener('submit', submitingPopupPlace);
  closePopup();
}

const cardsContainer = document.querySelector('.cards');

const titlePopupImage = document.querySelector('popup-image__title');
const imagePopupImage = document.querySelector('popup-image__image-popup');


// Для добавления карточки в разметку можно завести отдельную функцию, например renderCard, которая вызывает функцию создания карточки (createCard) и результат ее выполнения уже в разметку добавляет используя prepend, ее можно будет использовать как в методе загрузки первоначальных карточек, так и при добавлении пользовательской.

function addCard(item) {
  const card = createCard(item)
  cardsContainer.prepend(insertedCard);
}


function createCard(item) {
  const card = document.querySelector('#card-item').content;
  const insertedCard = card.querySelector('.card').cloneNode(true);
  insertedCard.querySelector('.card__mesto').textContent = item.name;
  const image = insertedCard.querySelector('.card__mask-card');
  image.src = item.link;
}






// function addCard(item) {
//   const card = document.querySelector('#card-item').content;
//   const insertedCard = card.querySelector('.card').cloneNode(true);
//   insertedCard.querySelector('.card__mesto').textContent = item.name;
//   const image = insertedCard.querySelector('.card__mask-card');
//   image.src = item.link;
//   image.addEventListener('click', (evt) => {
//     const popupImage = document.querySelector('#popup-image').content;
//     const openPopup = popupImage.querySelector('#popup-image__overlay').cloneNode(true);
//     openPopup.querySelector('#popup-image__image-popup').src = item.link;
//     openPopup.querySelector('#popup-image__title').textContent = item.name;
//     const closeButtonPopupImage = openPopup.querySelector('#popup-image__close-popup');
//     closeButtonPopupImage.addEventListener('click', (evt) => {
//       openPopup.style.opacity = '0';
//       setTimeout(() => {
//         openPopup.remove();
//       }, 500);
//     });
//     body.append(openPopup);

//     setTimeout(() => {
//       openPopup.style.opacity = '1';
//       openPopup.style.visibility = 'visible';
//     }, 100);
//   });

//   cards.prepend(insertedCard);
//   const basket = document.querySelector('#card-del-card');
//   basket.addEventListener('click', (evt) => {
//     insertedCard.remove();
//   });
// }


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

// const like = document.querySelectorAll('#card_like');

// like.forEach((item) => {
//   item.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('card__like_state_active');
//   });
// });



// const basket = document.querySelectorAll('#card-del-card');

// basket.forEach((item) => {
//   const cardRemoved = item.parentNode;
//   item.addEventListener('click', (evt) => {
//     cardRemoved.remove();
//   });
// });
