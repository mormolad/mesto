import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
  constructor(selectorPopup, api) {
    super(selectorPopup);
    this.form = this._popup.querySelector('.popup__content');
    this._api = api;
  }

  //добавить обработчик клика сабмита формы.
  setEventListeners(idCard, card) {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._api.deleteCard(idCard).then(() => {
        card.remove();
        super.close();
      });
    });
    super.setEventListeners();
  }

  //открыть попап удаления карточки
  open(idCard, card) {
    this.setEventListeners(idCard, card);
    super.open();
  }
}
