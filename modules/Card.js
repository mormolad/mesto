class Card {
  constructor(item) {
    this.name = item.name;
    this.link = item.link;
  }
  //показать всплывающее окно с картинкой места
  _showPopup = (element) => {
    element.classList.add('popup_enable');
    window.addEventListener('keydown', () => {
      this._closePopupWithKeyEsc;
    });
  };

  //нарисовать всплывающее окно с картинкой места
  _renderPopupImage(thisClass, evt) {
    const imagePopupImages = document.querySelector('#popup-image__image-popup');
    const titlePopupImages = document.querySelector('#popup-image__title');
    const popupImage = document.querySelector('#popup-image');
    imagePopupImages.src = evt.srcElement.src;
    imagePopupImages.alt = evt.srcElement.alt;
    titlePopupImages.textContent = evt.srcElement.alt;
    console.log(this);
    thisClass._showPopup(popupImage);
  }

  _closePopupWithKeyEsc(currentEvt) {
    if (currentEvt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_enable');
      closePopup(openedPopup);
    }
  }

  render() {
    const cardTemplate = document.querySelector('#card-item').content;
    const sampleCard = cardTemplate.querySelector('.card').cloneNode(true);
    const imageCard = sampleCard.querySelector('.card__mask-card');
    const nameCard = sampleCard.querySelector('.card__mesto');
    imageCard.src = this.link;
    imageCard.alt = this.name;
    nameCard.textContent = this.name;
    sampleCard.querySelector('#card_like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_state_active');
    });
    sampleCard.querySelector('#button-del-card').addEventListener('click', () => {
      sampleCard.remove();
    });
    imageCard.addEventListener('click', (evt) => {
      this._renderPopupImage(this, evt);
    });
    return sampleCard;
  }
}

export default Card;
