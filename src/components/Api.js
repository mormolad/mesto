import { data } from 'autoprefixer';

export default class Api {
  constructor(configFetch) {
    this.url = configFetch.url;
    this.headers = configFetch.headers;
  }
  //тест апи
  getInfoUser() {
    return fetch(`${this.url}users/me`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
