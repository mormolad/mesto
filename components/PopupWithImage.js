import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this._popupImage = document.querySelector('#popup-image');
        this._imagePopupImages = this._popupImage.querySelector('#popup-image__image-popup');
        this._titlePopupImages = this._popupImage.querySelector('#popup-image__title');
    }
    open(data) {
        this._imagePopupImages.src = data.link;
        this._imagePopupImages.alt = data.name;
        this._titlePopupImages.textContent = data.name;
        super.open();
    }
}