export default class UserInfo {
  constructor({ selectorName, selectorEmployment }) {
    this._name = document.querySelector(selectorName);
    this._employment = document.querySelector(selectorEmployment);
  }
  getUserInfo() {
    return { name: this._name, employment: this._employment };
  }
  setUserInfo({ name, employment }) {
    this._name.textContent = name;
    this._employment.textContent = employment;
  }
}
