import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._form = this._popup.querySelector('#content-popup-add-card');
    this._submitForm = submitForm;
  }
}
