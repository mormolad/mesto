'use strict';

let editButtom = document.querySelector('#profile__edit-button');

let username = document.querySelector('#profile__username');
let employment = document.querySelector('#profile__employment');

let popup = document.querySelector('#popup');
let usernamePopup = document.querySelector('#popup__username');
let employmentPopup = document.querySelector('#popup__employment');
let submitPopup = document.querySelector('#popup__submit');
let closePopup = document.querySelector('#popup__close');

console.log(username.style);

editButtom.addEventListener('click', showPopup);
closePopup.addEventListener('click', closingPopup);
submitPopup.addEventListener('click', submitingPopup);

function showPopup() {
  usernamePopup.placeholder = username.textContent;
  employmentPopup.placeholder = employment.textContent;
  popup.classList.toggle('popup_enable');
  popup.classList.toggle('popup_disable');
}

function closingPopup() {
  popup.classList.toggle('popup_enable');
  popup.classList.toggle('popup_disable');
}

function submitingPopup(submitPopup) {
  submitPopup.preventDefault();

  console.log(username.textContent);
  username.textContent = usernamePopup.value;
  employment.textContent = employmentPopup.value;
  popup.classList.toggle('popup_disable');
  popup.classList.toggle('popup_enable');
}
