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
  }

  // устанавливаем прослушиватели на поля ввода
  _setEventListners = () => {
    const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    const buttonSubmit = this._form.querySelector(this._submitButtonSelector);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState(inputs, buttonSubmit);
      });
    });
    this._toggleButtonState(inputs, buttonSubmit);
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
    const isValid = inputElement.validity.valid;
    const inputSectionElement = inputElement.closest(this._inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(this._inputErrorSelector);
    if (isValid) {
      this._hiddenError(errorElement, inputElement);
    } else {
      this._showError(errorElement, inputElement);
    }
  }
  //кнопка найдена
  _enableButton(buttonSubmit) {
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove(this._formIsInvalid);
  }
  //кнопка скрыта
  _disableButton(buttonSubmit) {
    buttonSubmit.setAttribute('disabled', true);
    buttonSubmit.classList.add(this._formIsInvalid);
  }
  //переключение состояния кнопки сохранить
  _toggleButtonState(inputs, buttonSubmit) {
    const formIsNoValid = inputs.some((element) => {
      return element.validity.valid === false;
    });

    if (formIsNoValid) {
      this._disableButton(buttonSubmit);
    } else {
      this._enableButton(buttonSubmit);
    }
  }
  // включаем валидацию
  enableValidation() {
    this._setEventListners();
  }
}

export default FormValidator;
