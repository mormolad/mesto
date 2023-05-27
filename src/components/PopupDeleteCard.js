import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(selectorPopup, deleteCard) {
    super(selectorPopup);
    this.form = this._popup.querySelector('.popup__content');
    this._deleteCard = deleteCard;
    this._idCard = '';
    this._card = '';
  }

  //добавить обработчик клика сабмита формы.
  setEventListeners() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCard(this._idCard, this._card);
    });
    super.setEventListeners();
  }

  //открыть попап удаления карточки
  open(idCard, card) {
    this._idCard = idCard;
    this._card = card;
    //this.setEventListeners(idCard, card);
    super.open();
  }
}
