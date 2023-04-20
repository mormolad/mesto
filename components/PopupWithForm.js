import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitForm) {
            super(selectorPopup);
            this.form = this._popup.querySelector('.popup__content');
            this._submitForm = submitForm;
            this._inputs = this.form.querySelectorAll('.popup__field');
        }
        //собирает данные всех полей формы.
    _getInputValues() {
            const dataInputs = this._inputs.map((item) => {
                console.log('декампозируй код');
                return item.value;
            });
            /return dataInputs;
        }
        //должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
    setEventListeners() {
            this.form.addEventListener('submit', (evt) => {
                evt.preventDefault();

                this._submitForm(evt);
                this.close();
            });
            super.setEventListeners();
        }
        //при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        this.form.reset();
        super.close();
    }
}