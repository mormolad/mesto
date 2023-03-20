class Card {
  constructor(item) {
    this.name = item.name;
    this.link = item.link;
  }

  _showPopup(element) {
    element.classList.add('popup_enable');
    window.addEventListener('keydown', closePopupWithKeyEsc);
  }

  _renderPopupImage(evt) {
    const imagePopupImages = document.querySelector('#popup-image__image-popup');
    const titlePopupImages = document.querySelector('#popup-image__title');
    const popupImage = document.querySelector('#popup-image');
    imagePopupImages.src = evt.srcElement.src;
    imagePopupImages.alt = evt.srcElement.alt;
    titlePopupImages.textContent = evt.srcElement.alt;
    console.log(popupImage);
    this._showPopup(popupImage);
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
    imageCard.addEventListener('click', this._renderPopupImage);
    return sampleCard;
  }
}

export default Card;
