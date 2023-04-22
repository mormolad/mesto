import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imagePopupImages = document
      .querySelector('#popup-image')
      .querySelector('#popup-image__image-popup');
    this._titlePopupImages = document
      .querySelector('#popup-image')
      .querySelector('#popup-image__title');
  }
  open(data) {
    this._imagePopupImages.src = data.link;
    this._imagePopupImages.alt = data.name;
    this._titlePopupImages.textContent = data.name;
    super.open();
  }
}
