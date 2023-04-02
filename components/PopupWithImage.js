import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._popup.querySelector('#content-popup-add-card');
    console.log(this._selectorPopup);
  }
  open() {
    console.log(this._selectorPopup);
    //validationPopupAddCard.resetErrorInputs();
    super.open();
  }
}
