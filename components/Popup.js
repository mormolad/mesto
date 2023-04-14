export default class Popup {
  constructor(selectorPopup) {
    this._selectorPopup = selectorPopup;
    this._popup = document.querySelector(this._selectorPopup);
    this._overlayPopup = this._popup.querySelector('.popup');
    this._buttonClose = this._popup.querySelector('.popup__close-popup');
    //this._form = this._popup.querySelector('#content-popup-add-card');
  }
  //закрытие всплывающего окна при нажатии Esc
  _handleEscClose(currentEvt) {
    if (currentEvt.key === 'Escape') {
      this.close();
    }
  }
  //показать всплывающее окно
  open() {
    this._popup.classList.add('popup_enable');
    window.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  //закрыть всплывающее окно
  close() {
    window.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_enable');
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
    this._popup.addEventListener('mousedown', (evt) => {
      this._closePopupClickOnOverlay(evt);
    });
    this._buttonClose.addEventListener('click', (evt) => {
      this._closePopupButtonClose(evt);
    });
  }
}
