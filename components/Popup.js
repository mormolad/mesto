export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._popup = document.querySelector(this._selectorPopup);
    this._overlayPopup = this._popup.querySelector('.popup');
    this._buttonClose = this._popup.querySelector('.popup__close-popup');
    this._form = this._popup.querySelector('#content-popup-add-card');
  }
  //закрытие всплывающего окна при нажатии Esc
  _closePopupWithKeyEsc(currentEvt) {
    if (currentEvt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_enable');
      close(openedPopup);
    }
  }
  //показать всплывающее окно
  open() {
    console.log(this._popup);
    this._popup.classList.add('popup_enable');
    window.addEventListener('keydown', this._closePopupWithKeyEsc);
  }
  //закрыть всплывающее окно
  close() {
    window.removeEventListener('keydown', this._closePopupWithKeyEsc);
    this._popup.classList.remove('popup_enable');
    this._form.reset();
  }
  //закрытие всплывающего окна при нажатии вне его пространства
  _closePopupClickOnOverlay(evt) {
    if (evt.currentTarget === evt.target) {
      this.close(evt.target);
    }
  }
  // закрыть попап крестиком
  _closePopupButtonClose(evt) {
    const popupCurrent = evt.target.closest('.popup');
    this.close(popupCurrent);
  }

  setEventListeners() {
    this._overlayPopup.addEventListener('mousedown', this._closePopupClickOnOverlay);
    this._buttonClose.addEventListener('click', this._closePopupButtonClose);
  }
}
