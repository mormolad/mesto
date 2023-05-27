export default class UserInfo {
  constructor(
    { selectorName, selectorEmployment, selectorAvatar },
    getUserInfo
  ) {
    this._name = document.querySelector(selectorName);
    this._employment = document.querySelector(selectorEmployment);
    this._avatar = document.querySelector(selectorAvatar);
    this._getUserInfo = getUserInfo;
  }
  // взять информацию о пользователе
  getUserInfo() {
    this._getUserInfo();
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
