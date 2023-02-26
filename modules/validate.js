// проверка на валидность
function checkForValidation(arrayOfElements) {
  const arrayOfStateField = [];
  for (let i = 0; i < arrayOfElements.length; i++) {
    arrayOfStateField[i] = arrayOfElements[i].validity.valid;
  }
  return !arrayOfStateField.some((element) => {
    return element === false;
  });
}
//сделать кнопку не активной
function hideButton(buttonForm, collectionSelectors) {
  buttonForm.classList.add(collectionSelectors.inactiveButtonClass);
  buttonForm.setAttribute('disabled', true);
}
//сделать кнопку активной
function showButton(buttonForm, collectionSelectors) {
  buttonForm.removeAttribute('disabled', false);
  buttonForm.classList.remove(collectionSelectors.inactiveButtonClass);
}
//переключатель состояния кнопки
function switchStateButton(item, collectionSelectors) {
  return checkForValidation(item.currentTarget.querySelectorAll(collectionSelectors.inputSelector));
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

function enableValidation(collectionSelectors) {
  popupEditUser.addEventListener('input', (ivt) => {
    switchStateButton(ivt, collectionSelectors) ? showButton(buttonSubmitEditUser, collectionSelectors) : hideButton(buttonSubmitEditUser, collectionSelectors);
  });
  popupAddCard.addEventListener('input', (ivt) => {
    switchStateButton(ivt, collectionSelectors) ? showButton(buttonSubmitAddCard, collectionSelectors) : hideButton(buttonSubmitAddCard, collectionSelectors);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__submit_disable',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible',
});
