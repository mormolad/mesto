export default class UserInfo {
  constructor({ selectorName, selectorEmployment }, api) {
    this._name = document.querySelector(selectorName);
    this._employment = document.querySelector(selectorEmployment);
    this._api = api;
  }
  getUserInfo() {
    this._api.getInfoUser().then((data) => {
      return {
        name: data.name,
        employment: data.about,
      };
    });
  }
  setUserInfo({ name, employment }) {
    this._name.textContent = name;
    this._employment.textContent = employment;
  }
}
