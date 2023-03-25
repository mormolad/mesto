class FormValidator {
  constructor(validationOptions) {
    this.validationOptions = validationOptions;
  }

  // включаем валидацию
  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this.validationOptions.formSelector));
    forms.forEach((form) => {
      this._setEventListners(form, this.validationOptions);
    });
  }

  // устанавливаем прослушщиватели на поля ввода
  _setEventListners = (form, options) => {
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));
    const buttonSubmit = form.querySelector(options.submitButtonSelector);
    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement, options);
        this._toggleButtonState(inputs, buttonSubmit, options);
      });
    });
    this._toggleButtonState(inputs, buttonSubmit, options);
    form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputs, buttonSubmit, options);
      }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
    });
  };

  //показать сообщение об ошибки валидации и подчеркнуть красным поле ввода
  _showError(errorElement, inputElement, options) {
    errorElement.innerText = inputElement.validationMessage;
    inputElement.classList.add(options.inputErrorClass);
  }

  //убрать сообщение об ошибки валидации и подчеркнуть черным поле ввода
  _hiddenError(errorElement, inputElement, options) {
    errorElement.innerText = '';
    inputElement.classList.remove(options.inputErrorClass);
  }

  //переключение состояния поля ввода
  _toggleInputState(inputElement, options) {
    const isValid = inputElement.validity.valid;
    const inputSectionElement = inputElement.closest(options.inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
    if (isValid) {
      this._hiddenError(errorElement, inputElement, options);
    } else {
      this._showError(errorElement, inputElement, options);
    }
  }
  //кнопка найдена
  _enableButton(buttonSubmit, options) {
    buttonSubmit.removeAttribute('disabled');
    buttonSubmit.classList.remove(options.formIsInvalid);
  }
  //кнопка скрыта
  _disableButton(buttonSubmit, options) {
    buttonSubmit.setAttribute('disabled', true);
    buttonSubmit.classList.add(options.formIsInvalid);
  }
  //переключение состояния кнопки сохранить
  _toggleButtonState(inputs, buttonSubmit, options) {
    const formIsNoValid = inputs.some((element) => {
      return element.validity.valid === false;
    });
    if (formIsNoValid) {
      this._disableButton(buttonSubmit, options);
    } else {
      this._enableButton(buttonSubmit, options);
    }
  }
}

export default FormValidator;
