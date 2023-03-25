const imagePopupImages = document.querySelector('#popup-image__image-popup');
const titlePopupImages = document.querySelector('#popup-image__title');
const popupImage = document.querySelector('#popup-image');
const buttonClose = popupImage.querySelector('.popup__close-popup');

class Card {
  //закрыть всплывающее окно
  static closePopup(element) {
    window.removeEventListener('keydown', closePopupWithKeyEsc);
    element.classList.remove('popup_enable');
  }
  //показать всплывающее окно с картинкой места
  static showPopup(element) {
    element.classList.add('popup_enable');
    //console.log(this);
    window.addEventListener('keydown', closePopupWithKeyEsc); //
  }

  constructor(item) {
    this.name = item.name;
    this.link = item.link;
  }

  //закрытие всплывающего окна при нажатии на крестик
  _closePopupClickButtonClose(evt) {
    const popup = evt.target.closest('.popup');
    Card.closePopup(popup);
  }

  //закрытие всплывающего окна при нажатии вне его пространства
  _closePopupClickOnOverlay(evt) {
    if (evt.currentTarget === evt.target) {
      Card.closePopup(evt.target);
    }
  }

  //закрытие всплывающего окна при нажатии Esc
  _closePopupWithKeyEsc(currentEvt) {
    if (currentEvt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_enable');
      Card.closePopup(openedPopup);
    }
  }

  //нарисовать всплывающее окно с картинкой места
  _renderPopupImage(evt) {
    imagePopupImages.src = evt.srcElement.src;
    imagePopupImages.alt = evt.srcElement.alt;
    titlePopupImages.textContent = evt.srcElement.alt;
    Card.showPopup(popupImage);
    popupImage.addEventListener('mousedown', (evt) => {
      this._closePopupClickOnOverlay(evt);
    });
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
      this._renderPopupImage(evt);
    });
    buttonClose.addEventListener('click', this._closePopupClickButtonClose);
    window.addEventListener('click', this._closePopupClickOnOverlay);
    return sampleCard;
  }
}
//закрытие всплывающего окна при нажатии Esc
function closePopupWithKeyEsc(currentEvt) {
  if (currentEvt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_enable');
    Card.closePopup(openedPopup);
  }
}

export default Card;
