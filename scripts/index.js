'use strict';

let editButtom = document.querySelector('#profile__edit-button');

let username = document.querySelector('#profile__username');
let employment = document.querySelector('#profile__employment');

let popup = document.querySelector('#popup');
let usernamePopup = document.querySelector('#popup__username');
let employmentPopup = document.querySelector('#popup__employment');
let submitPopup = document.querySelector('#popup__content');
let closePopup = document.querySelector('#popup__close-popup');

editButtom.addEventListener('click', showPopup);
closePopup.addEventListener('click', closingPopup);
submitPopup.addEventListener('submit', submitingPopup);

function showPopup() {
  usernamePopup.value = username.textContent;
  employmentPopup.value = employment.textContent;
  popup.classList.add('popup_enable');
}

function closingPopup() {
  popup.classList.remove('popup_enable');
}
function submitingPopup(evt) {
  evt.preventDefault();
  if (usernamePopup.value !== '' && employmentPopup.value !== '') {
    username.textContent = usernamePopup.value;
    employment.textContent = employmentPopup.value;
  }

  closingPopup();
}
