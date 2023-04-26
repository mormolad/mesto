'use strict';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import validationOptions from '../utils/validateOptions.js';
import initialCards from '../utils/dataCard.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');
const selectorTemplateCard = '#card-item';

//обращаемся к классу для создания элемента вставки на страницу
const allCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item, selectorTemplateCard, renderPopupImage);
      return card.render();
    },
  },
  '.cards'
);
//создаём экземпляр класса попапа с формой для добовления места
const popupAddCard = new PopupWithForm(
  '#popup-add-card',
  handlePlaceFormSubmit
);
//функция возвращающая экземпляр класса Card
const createCard = (item, selectorTemplateCard, renderPopup) => {
  const newCard = new Card(item, selectorTemplateCard, renderPopup);
  newCard.render();
  return newCard;
};
//вставляем готовый элемент на страницу
allCards.renderCards();
//создаём экземпляр класса для попапа с картинкой места
const popupOpenImage = new PopupWithImage('#popup-image');

//создаём экземпляр класса попапа с формой для редактирования профиля
const popupEditUser = new PopupWithForm(
  '#popup-edit-user',
  handleProfileFormSubmit
);
const inputName = popupEditUser.form.querySelector('#input-user-name');
const inputEmployment = popupEditUser.form.querySelector(
  '#input-user-employment'
);
//включаем валидацию
const validationPopupEditUser = new FormValidator(
  validationOptions,
  popupEditUser.form
);
validationPopupEditUser.enableValidation();

//включаем валидацию
const validationPopupAddCard = new FormValidator(
  validationOptions,
  popupAddCard.form
);
validationPopupAddCard.enableValidation();
const userInfo = new UserInfo({
  selectorName: '#profile__username',
  selectorEmployment: '#profile__employment',
});
//функция открытия попапа
function renderPopupImage(data) {
  popupOpenImage.open(data);
}
// обработчик кнопки принять в форме добавления места
function handlePlaceFormSubmit({ inputPlaceName, inputURLImage }) {
  const card = createCard(
    { name: inputPlaceName, link: inputURLImage },
    selectorTemplateCard,
    renderPopupImage
  );
  allCards.addItem(card.render());
}

//обрботать форму редактирования информации о пользователе при нажатии кнопки submit
function handleProfileFormSubmit({ inputUserName, inputUserEmployment }) {
  userInfo.setUserInfo({
    name: inputUserName,
    employment: inputUserEmployment,
  });
}

//устанавливаем слушатели для экземпляра попапа добовления места
popupAddCard.setEventListeners();
//устанавливаем слушатель на кнопку открытия попапа с добовлением места
buttonAdd.addEventListener('click', () => {
  validationPopupAddCard.resetErrorInputs();
  popupAddCard.open();
});
//устанавливаем слушатели для экземпляра попапа редактирования профиля
popupEditUser.setEventListeners();
//устанавливаем слушатель на кнопку открытия попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
  validationPopupEditUser.resetErrorInputs();
  const { name, employment } = userInfo.getUserInfo();
  inputName.value = name;
  inputEmployment.value = employment;
  popupEditUser.open();
});
//устанавливаем слушатели на попап с картинкой
popupOpenImage.setEventListeners();
