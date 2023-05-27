import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this.form = this._popup.querySelector('.popup__content');
    this._submitForm = submitForm;
    this._listInputs = this.form.querySelectorAll('.popup__field');
    this._buttonSubmit = this.form.querySelector('.popup__submit');
  }
  //собирает данные всех полей формы.
  _getInputValues() {
    const inputValues = {};
    this._listInputs.forEach((input) => {
      inputValues[input.getAttribute('name')] = input.value;
    });
    return inputValues;
  }
  //должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
  setEventListeners() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
  //при закрытии попапа форма должна ещё и сбрасываться.
  close() {
    this.form.reset();
    super.close();
  }
  renderButton(stateButton) {
    stateButton
      ? (this._buttonSubmit.innerText = 'Сохранение...')
      : (this._buttonSubmit.innerText = 'Сохранить');
  }
}
