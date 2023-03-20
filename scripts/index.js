'use strict';

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
const imagePopupImages = document.querySelector('#popup-image__image-popup');
const titlePopupImages = document.querySelector('#popup-image__title');

initialCards.forEach((item) => {
  const card = new Card(item);
  cardsContainer.append(card.render());
});
