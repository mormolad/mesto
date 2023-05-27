export default class UserInfo {
  constructor({ selectorName, selectorEmployment, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._employment = document.querySelector(selectorEmployment);
    this._avatar = document.querySelector(selectorAvatar);
  }
  // взять информацию о пользователе
  getUserInfo() {
    return {
      name: this._name.textContent,
      employment: this._employment.textContent,
    };
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
