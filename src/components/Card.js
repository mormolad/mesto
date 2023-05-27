class Card {
  constructor(
    item,
    selectorTemplate,
    idOwnerPage,
    handlePopupDelCard,
    handleCardClick,
    handlerLike
  ) {
    this._name = item.name;
    this._link = item.link;
    this.likes = item.likes;
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
    this._likesOfNumber.textContent = this.likes.length;
    this._handlePopupDelCard = handlePopupDelCard;
    this._handlerLike = handlerLike;
  }

  _setListeners() {
    //устанавливаем слушатель лайка
    this._buttonLike.addEventListener('click', () => {
      this._handlerLike(this._checkOwnerLike(), this._idCard);
      this.renderButtonLike();
      this._likesOfNumber.textContent = this.likes.length;
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

  //отрисовать сердечко
  renderButtonLike() {
    this._checkOwnerLike()
      ? this._buttonLike.classList.add('card__like_state_active')
      : this._buttonLike.classList.remove('card__like_state_active');

    this._likesOfNumber.textContent = this.likes.length;
  }

  //проверить есть ли лайк от хозяина страници
  _checkOwnerLike() {
    return this.likes.some((ownerLike) => {
      return ownerLike._id === this._idOwnerPage;
    });
  }

  // установка кнопки "удалить картчку"
  _setButtonDeleteCard() {
    if (this._idOwnerCard === this._idOwnerPage) {
      this._buttonDelCard.addEventListener('click', (evt) => {
        this._handlePopupDelCard(this._idCard, evt.target.parentNode);
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
    this.renderButtonLike();
    this._setListeners();
    this._setButtonDeleteCard();
    return this._sampleCard;
  }
}

export default Card;
