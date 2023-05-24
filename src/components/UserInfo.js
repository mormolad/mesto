export default class UserInfo {
  constructor({ selectorName, selectorEmployment, selectorAvatar }, api) {
    this._name = document.querySelector(selectorName);
    this._employment = document.querySelector(selectorEmployment);
    this._avatar = document.querySelector(selectorAvatar);
    this._api = api;
  }
  //настроить имя пользователя и профессию
  setUserInfo({ name, employment }) {
    this._name.textContent = name;
    this._employment.textContent = employment;
  }
  //настроить аватар
  setAvatar(link) {
    this._avatar.src = link;
  }
}
