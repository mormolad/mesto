'use strict';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import validationOptions from '../utils/validateOptions.js';
import initialCards from '../utils/dataCard.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
const userName = document.querySelector('#profile__username');
const employment = document.querySelector('#profile__employment');
const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');

//const popupEditUser = document.querySelector('#popup-edit-user');
// const inputName = popupEditUser.querySelector('#input-user-name');
// const inputEmployment = popupEditUser.querySelector('#input-user-employment');
// const formEditUser = popupEditUser.querySelector('#content-popup-edit-user');
// const validationPopupEditUser = new FormValidator(validationOptions, formEditUser);

// включаем валидацию
// validationPopupEditUser.enableValidation();
// //const popupAddCard = document.querySelector('#popup-add-card');
// const inputNamePlace = popupAddCard.querySelector('#input-place-name');
// const inputUrlImagePlace = popupAddCard.querySelector('#input-url-image-place');
// const formAddCard = popupAddCard.querySelector('#content-popup-add-card');
// const validationPopupAddCard = new FormValidator(validationOptions, formAddCard);
//validationPopupAddCard.enableValidation();

const cardsContainer = document.querySelector('.cards');
const selectorTemplateCard = '#card-item';

//обращаемся к классу для создания элемента вставки на страницу
const allCards = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = new Card(item, selectorTemplateCard, renderPopupImage);
            return card.render();
        },
    },
    '.cards'
);
//вставляем готовый элемент на страницу
allCards.rendererCards();

//создаём экземпляр класса для попапа с картинкой места
const popupOpenImage = new PopupWithImage('#popup-image');
//устанавливаем слушатели на это окно
popupOpenImage.setEventListeners();

function renderPopupImage(data) {
    popupOpenImage.open(data);
}
// buttonAdd.addEventListener('click', () => {
//     popupOpenImage.open();
//});
// const validationPopupAddCard = new FormValidator(validationOptions, popupOpenImage._form);
// validationPopupAddCard.enableValidation();
//
// показать попап с картинкой

// обработчик кнопки принять в форме добавления места
function handlePlaceFormSubmit(evt) {
    evt.preventDefault();
    const card = new Card({ name: inputNamePlace.value, link: inputUrlImagePlace.value }, selectorTemplateCard, renderPopupImage);
    cardsContainer.prepend(card.render());
    closePopup(popupAddCard);
}

// показать всплывающее окно добавления карточки
// function showPopupAddCard() {
//   formAddCard.reset();
//   validationPopupAddCard.resetErrorInputs();
//   showPopup(popupAddCard);
// }

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = inputName.value;
    employment.textContent = inputEmployment.value;
    closePopup(popupEditUser);
}
// показать всплывающее окно редактирования информации о пользователе
function showPopupEditUser() {
    formEditUser.reset();
    validationPopupEditUser.resetErrorInputs();
    inputName.value = userName.textContent;
    inputEmployment.value = employment.textContent;
    showPopup(popupEditUser);
}

//установка слушателей
//buttonEdit.addEventListener('click', showPopupEditUser);
//buttonAdd.addEventListener('click', showPopupAddCard);
//formEditUser.addEventListener('submit', handleProfileFormSubmit);
//formAddCard.addEventListener('submit', handlePlaceFormSubmit);
// overlayPopups.forEach((item) => {
//   item.addEventListener('mousedown', closePopupClickOnOverlay);
// });
// const popups = document.querySelectorAll('.popup');
// popups.forEach((popup) => {
//   //const buttonClose = popup.querySelector('.popup__close-popup');
//   buttonClose.addEventListener('click', closePopupButtonClose);
// });