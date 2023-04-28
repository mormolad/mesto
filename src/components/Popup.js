export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._buttonClose = this._popup.querySelector('.popup__close-popup');
    this._handleEscClose = this._handleEscClose.bind(this);
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
    window.addEventListener('keydown', this._handleEscClose);
  }

  //закрыть всплывающее окно
  close() {
    window.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_enable');
  }

  //закрытие всплывающего окна при нажатии вне его пространства
  _closePopupClickOnOverlay(evt) {
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  }

  // установка слушателей
  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      this._closePopupClickOnOverlay(evt);
    });
    this._buttonClose.addEventListener('click', () => {
      this.close();
    });
  }
}
