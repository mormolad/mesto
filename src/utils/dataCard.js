const karachaevskURL = new URL('../images/karachaevsk_X.jpg', import.meta.url);
const elbruskURL = new URL('../images/elbrus_X.jpg', import.meta.url);
const dombaikURL = new URL('../images/dombai_X.jpg', import.meta.url);
const krasnoyarskURL = new URL('../images/krasnoyarsk_X.jpg', import.meta.url);
const petropavlovskURL = new URL(
  '../images/petropavlovsk_X.jpg',
  import.meta.url
);
const eltonURL = new URL('../images/elton_X.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Карачаево-Черкеск',
    link: karachaevskURL,
  },
  {
    name: 'Гора Эльбрус',
    link: elbruskURL,
  },
  {
    name: 'Домбай',
    link: dombaikURL,
  },
  {
    name: 'Красноярск',
    link: krasnoyarskURL,
  },
  {
    name: 'Петропаловск-Камчатский',
    link: petropavlovskURL,
  },
  {
    name: 'Эльтон',
    link: eltonURL,
  },
];

export default initialCards;
