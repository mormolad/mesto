class Card {
  constructor(
    item,
    selectorTemplate,
    handleCardClick,
    idOwnerPage,
    popupDelCard,
    api
  ) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._idOwnerCard = item.owner._id;
    this._idOwnerPage = idOwnerPage;
    this._idCard = item._id;
    this._selectorTemplate = selectorTemplate;
    this._handleCardClick = handleCardClick;
    this._sampleCard = this._getTemplate();
    this._imageCard = this._sampleCard.querySelector('.card__mask-card');
    this._nameCard = this._sampleCard.querySelector('.card__mesto');
    this._likesOfNumber = this._sampleCard.querySelector('.card__numberOfLike');
    this._buttonDelCard = this._sampleCard.querySelector('.card__del-card');
    this._buttonLike = this._sampleCard.querySelector('.card__like');
    this._likesOfNumber.textContent = this._likes.length;
    this._popupDel = popupDelCard;
    this._api = api;
  }

  _setListener() {
    //устанавливаем слушатель лайка
    this._buttonLike.addEventListener('click', () => {
      this._hendlerLike();
    });
    //устанавливаем слушатель для открытия попапа с картинкой
    this._imageCard.addEventListener('click', () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  // подготовить катрочку
  _getTemplate() {
    this._template = document
      .querySelector(this._selectorTemplate)
      .content.querySelector('.card');
    return this._template.cloneNode(true);
  }

  // обработка кнопки лайка
  _hendlerLike() {
    if (this._checkOwnerLike()) {
      this._api.deleteLike(this._idCard).then((data) => {
        this._renderButtonLikeClick();
        this._likes = data.likes;
        this._likesOfNumber.textContent = this._likes.length;
      });
    } else {
      this._api.setLike(this._idCard).then((data) => {
        this._renderButtonLikeClick();
        this._likes = data.likes;
        this._likesOfNumber.textContent = this._likes.length;
      });
    }
  }

  //отрисовать сердечко при установки лайка
  _renderButtonLikeClick() {
    if (this._checkOwnerLike()) {
      this._buttonLike.classList.remove('card__like_state_active');
    } else {
      this._buttonLike.classList.add('card__like_state_active');
    }
  }

  //отрисовать сердечко при изначавльной отрисовки страници
  _renderButtonLike() {
    if (this._checkOwnerLike()) {
      this._buttonLike.classList.add('card__like_state_active');
    } else {
      this._buttonLike.classList.remove('card__like_state_active');
    }
    this._likesOfNumber.textContent = this._likes.length;
  }

  //проверить есть ли лайк от хозяина страници
  _checkOwnerLike() {
    return this._likes.some((ownerLike) => {
      return ownerLike._id === this._idOwnerPage;
    });
  }

  // установка кнопки "удалить картчку"
  _setButtonDeleteCard() {
    if (this._idOwnerCard === this._idOwnerPage) {
      this._buttonDelCard.addEventListener('click', (evt) => {
        this._popupDel.open(this._idCard, evt.target.parentNode);
      });
    } else {
      this._buttonDelCard.remove('card__del-card');
    }
  }

  // отдать готовую карточку
  render() {
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._nameCard.textContent = this._name;
    this._renderButtonLike();
    this._setListener();
    this._setButtonDeleteCard();
    return this._sampleCard;
  }
}

export default Card;
