class FormValidator {
  constructor(validationOptions, form) {
    this._inputSelector = validationOptions.inputSelector;
    this._submitButtonSelector = validationOptions.submitButtonSelector;
    this._inactiveButtonClass = validationOptions.inactiveButtonClass;
    this._inputSectionSelector = validationOptions.inputSectionSelector;
    this._inputErrorSelector = validationOptions.inputErrorSelector;
    this._inputErrorClass = validationOptions.inputErrorClass;
    this._formIsInvalid = validationOptions.formIsInvalid;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._form.querySelector(this._submitButtonSelector);
  }

  // устанавливаем прослушиватели на поля ввода
  _setEventListners = () => {
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  };

  //показать сообщение об ошибки валидации и подчеркнуть красным поле ввода
  _showError(errorElement, inputElement) {
    errorElement.innerText = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  //убрать сообщение об ошибки валидации и подчеркнуть черным поле ввода
  _hiddenError(errorElement, inputElement) {
    errorElement.innerText = '';
    inputElement.classList.remove(this._inputErrorClass);
  }

  //переключение состояния поля ввода
  _toggleInputState(inputElement) {
    const errorElement = this._getSpanError(inputElement);
    inputElement.validity.valid ? this._hiddenError(errorElement, inputElement) : this._showError(errorElement, inputElement);
  }

  _getSpanError(inputElement) {
    const inputSectionElement = inputElement.closest(this._inputSectionSelector);
    return inputSectionElement.querySelector(this._inputErrorSelector);
  }

  //кнопка найдена
  _enableButton() {
    this._buttonSubmit.removeAttribute('disabled');
    this._buttonSubmit.classList.remove(this._formIsInvalid);
  }
  //кнопка скрыта
  _disableButton() {
    this._buttonSubmit.setAttribute('disabled', true);
    this._buttonSubmit.classList.add(this._formIsInvalid);
  }
  //переключение состояния кнопки сохранить
  _toggleButtonState() {
    const formIsNoValid = this._inputs.some((element) => {
      return element.validity.valid === false;
    });
    formIsNoValid ? this._disableButton() : this._enableButton();
  }

  //обнулить поля ошибок при закрытии окна
  resetErrorInputs() {
    this._inputs.forEach((inputElement) => {
      this._hiddenError(this._getSpanError(inputElement), inputElement);
    });
    this._toggleButtonState();
  }

  // включаем валидацию
  enableValidation() {
    this._setEventListners();
  }
}

export default FormValidator;
