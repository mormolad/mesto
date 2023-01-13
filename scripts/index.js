let editButtom = document.querySelector('#profile__edit-button');

let username = document.querySelector('#profile__username');
let employment = document.querySelector('#profile__employment');

let popup = document.querySelector('#popup');
let usernamePopup = document.querySelector('#popup__username');
let employmentPopup = document.querySelector('#popup__employment');
let submitPopup = document.querySelector('#popup__submit');
let closePopup = document.querySelector('#popup__close');

editButtom.addEventListener('click', showPopup);
closePopup.addEventListener('click', closingPopup);
submitPopup.addEventListener('click', submitingPopup);

function showPopup() {
    usernamePopup.placeholder = username.textContent;
    employmentPopup.placeholder = employment.textContent;
    popup.style.display = 'flex';
}

function closingPopup() {
    popup.style.display = 'none';
}

function submitingPopup(ivt) {
    ivt.preventDefault();
    if (usernamePopup.value !== '') {
        username.textContent = usernamePopup.value;
    }
    if (employmentPopup.value !== '') {
        employment.textContent = employmentPopup.value;
    }
    popup.style.display = 'none';
}
