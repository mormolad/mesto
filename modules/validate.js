//показать сообщение об ошибки валидации и подчеркнуть красным поле ввода
const showError = (errorElement, inputElement, options) => {
  errorElement.innerText = inputElement.validationMessage;
  inputElement.classList.add(options.inputErrorClass);
};
////убрать сообщение об ошибки валидации и подчеркнуть черным поле ввода
const hiddenError = (errorElement, inputElement, options) => {
  errorElement.innerText = '';
  inputElement.classList.remove(options.inputErrorClass);
};
//переключение состояния поля ввода
const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(options.inputSectionSelector);
  const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
  if (isValid) {
    hiddenError(errorElement, inputElement, options);
  } else {
    showError(errorElement, inputElement, options);
  }
};
//кнопка найдена
const enableButton = (buttonSubmit, options) => {
  buttonSubmit.removeAttribute('disabled');
  buttonSubmit.classList.remove(options.formIsInvalid);
};
//кнопка скрыта
const disableButton = (buttonSubmit, options) => {
  buttonSubmit.setAttribute('disabled', true);
  buttonSubmit.classList.add(options.formIsInvalid);
};
//переключение состояния кнопки сохранить
const toggleButtonState = (inputs, buttonSubmit, options) => {
  const formIsNoValid = inputs.some((element) => {
    return element.validity.valid === false;
  });
  if (formIsNoValid) {
    disableButton(buttonSubmit, options);
  } else {
    enableButton(buttonSubmit, options);
  }
};
// включаем валидацию
const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));
  forms.forEach((form) => {
    setEventListners(form, options);
  });
};
// устанавливаем прослушщиватели на поля ввода
const setEventListners = (form, options) => {
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  const buttonSubmit = form.querySelector(options.submitButtonSelector);
  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, buttonSubmit, options);
    });
  });
  toggleButtonState(inputs, buttonSubmit, options);
};
// селекторы для робрабокти форм
const validationOptions = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disable',
  inputSectionSelector: '.popup__form-section',
  inputErrorSelector: '.popup__message-error',
  inputErrorClass: 'popup__field_state-invalid',
  formIsInvalid: 'popup__submit_disable',
};

enableValidation(validationOptions);
