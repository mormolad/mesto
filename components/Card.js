class Card {
  constructor(item, selectorTemplate, renderPopupImage) {
    this._name = item.name;
    this._link = item.link;
    this._selectorTemplate = selectorTemplate;
    this._renderPopupImage = renderPopupImage;
    this._template = document.querySelector(this._selectorTemplate).content.querySelector('.card');
    this._sampleCard = this._getTemplate();
    this._imageCard = this._sampleCard.querySelector('.card__mask-card');
    this._nameCard = this._sampleCard.querySelector('.card__mesto');
  }

  _handleListener() {
    //устанавливаем слушатель лайка
    this._sampleCard.querySelector('#card_like').addEventListener('click', this._like);
    //устанавливаем слушатель для открытия попапа с картинкой
    this._sampleCard.querySelector('.card__mask-card').addEventListener('click', this._renderPopupImage);
    //устанавливаем слушатель удаления карточки
    this._sampleCard.querySelector('#button-del-card').addEventListener('click', () => {
      this._deleteCard();
    });
  }

  // подготовить катрочку
  _getTemplate() {
    return this._template.cloneNode(true);
  }
  // обработка кнопки лайка
  _like(evt) {
    evt.target.classList.toggle('card__like_state_active');
  }
  // удалить картчку
  _deleteCard() {
    this._sampleCard.remove();
  }

  // отдать готовую карточку
  render() {
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._nameCard.textContent = this._name;
    this._handleListener();
    return this._sampleCard;
  }
}

export default Card;
