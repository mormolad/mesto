'use strict';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import validationOptions from '../utils/validateOptions.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import './index.css';

const buttonEdit = document.querySelector('#profile__edit-button');
const buttonAdd = document.querySelector('#profile__add-button');
const buttonEditAvatar = document.querySelector('#profile__edit-avatar');
const selectorTemplateCard = '#card-item';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-66/',
  headers: {
    'Content-Type': 'application/json',
    authorization: '4d34c841-0266-4e27-9ed8-f76bb6fb7087',
  },
});

//обращаемся к классу для создания элемента вставки на страницу
const cardsContainer = new Section('.cards');

//создаём экземпляр класса попапа с формой для добовления места
const popupAddCard = new PopupWithForm(
  '#popup-add-card',
  // обработчик кнопки принять в форме добавления места
  ({ inputPlaceName, inputURLImage }) => {
    popupAddCard.renderButton(true);
    api
      .setNewCadr({ name: inputPlaceName, link: inputURLImage })
      .then((res) => {
        const card = createCard(
          res,
          selectorTemplateCard,
          renderPopupImage,
          res.owner._id
        );
        cardsContainer.addItem(card);
        popupAddCard.close();
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        popupAddCard.renderButton(false);
      });
  }
);
//создаём экземпляр класса попапа с формой для редактирования аватара
const popupEditAvatar = new PopupWithForm('#popup-add-new-avatar', (link) => {
  popupEditAvatar.renderButton(true);
  api
    .setAvatar(link.inputURLAvatar)
    .then((res) => {
      userInfo.setAvatar(res.avatar);
      popupEditAvatar.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`))
    .finally(() => {
      popupEditAvatar.renderButton(false);
    });
});

//создаём экземпляр класса для попапа с картинкой места
const popupOpenImage = new PopupWithImage('#popup-image');

//создаём экземпляр класса для попапа подтверждения удаления места
const popupDelCard = new PopupDeleteCard('.popup_delete', (idCard, card) => {
  api
    .deleteCard(idCard)
    .then(() => {
      card.remove();
      popupDelCard.close();
    })
    .catch((err) => console.log(`Ошибка.....: ${err}`));
});

//создаём экземпляр класса попапа с формой для редактирования профиля
const popupEditUser = new PopupWithForm(
  '#popup-edit-user',
  //обрботать форму редактирования информации о пользователе при нажатии кнопки submit
  ({ inputUserName, inputUserEmployment }) => {
    popupEditUser.renderButton(true);
    api
      .setUserData({ name: inputUserName, about: inputUserEmployment })
      .then(() => {
        userInfo.setUserInfo({
          name: inputUserName,
          employment: inputUserEmployment,
        });
        popupEditUser.close();
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        popupEditUser.renderButton(false);
      });
  }
);

const inputEditUrlAvatar = popupEditAvatar.form.querySelector(
  '#input-url-new-avatar'
);

const inputName = popupEditUser.form.querySelector('#input-user-name');
const inputEmployment = popupEditUser.form.querySelector(
  '#input-user-employment'
);
//создание классов валидации
const validationPopupEditUser = new FormValidator(
  validationOptions,
  popupEditUser.form
);

const validationPopupAddCard = new FormValidator(
  validationOptions,
  popupAddCard.form
);

const validationPopupEditAvatar = new FormValidator(
  validationOptions,
  popupEditAvatar.form
);
//работа с информацией о пользователе
const userInfo = new UserInfo({
  selectorName: '#profile__username',
  selectorEmployment: '#profile__employment',
  selectorAvatar: '.profile__avatar',
});

//функция возвращающая экземпляр класса Card
const createCard = (item, selectorTemplateCard, renderPopup, ownerPageId) => {
  const newCard = new Card(
    item,
    selectorTemplateCard,
    ownerPageId,
    (idCard, card) => {
      popupDelCard.open(idCard, card);
    },
    renderPopup,
    (stateLike, idCard) => {
      stateLike
        ? api
            .deleteLike(idCard)
            .then((data) => {
              newCard.likes = data.likes;
              newCard.renderButtonLike();
            })
            .catch((err) => console.log(`Ошибка.....: ${err}`))
        : api
            .setLike(idCard)
            .then((data) => {
              newCard.likes = data.likes;
              newCard.renderButtonLike();
            })
            .catch((err) => console.log(`Ошибка.....: ${err}`));
    }
  );
  return newCard.render();
};

//включаем валидацию
validationPopupEditUser.enableValidation();
validationPopupAddCard.enableValidation();
validationPopupEditAvatar.enableValidation();

Promise.all([api.getInfoUser(), api.getCard()])
  .then((data) => {
    // отрисовываем имя пользователя на странице и устанавливаем аватар
    userInfo.setUserInfo({
      name: data[0].name,
      employment: data[0].about,
    });
    userInfo.setAvatar(data[0].avatar);
    //вставляем готовый элемент на страницу
    cardsContainer.renderCards({
      items: data[1].reverse(),
      renderer: (item) => {
        return createCard(
          item,
          selectorTemplateCard,
          renderPopupImage,
          data[0]._id
        );
      },
    });
  })
  .catch((err) => console.log(`Ошибка.....: ${err}`));

//функция открытия попапа
function renderPopupImage(data) {
  popupOpenImage.open(data);
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
//устанавливаем слушатели для экземпляра попапа редактирования аватара
popupEditAvatar.setEventListeners();

//устанавливаем слушатель на кнопку открытия попапа редактирования профиля
buttonEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputEmployment.value = data.employment;
  validationPopupEditUser.resetErrorInputs();
  popupEditUser.open();
});
//устанавливаем слушатели на попап с картинкой
popupOpenImage.setEventListeners();
//устанавливаем слушатель на иконку редактирования аватара
buttonEditAvatar.addEventListener('click', () => {
  validationPopupEditAvatar.resetErrorInputs();
  popupEditAvatar.open();
});
//устанавливаем слушатели на попап удаления кары
popupDelCard.setEventListeners();
