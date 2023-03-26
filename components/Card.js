class Card {
  constructor(item, selectorTemplate) {
    this._name = item.name;
    this._link = item.link;
    this._selectorTemplate = selectorTemplate;
  }

  _handleListener(sampleCard) {
    sampleCard.querySelector('#card_like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__like_state_active');
    });
    sampleCard.querySelector('#button-del-card').addEventListener('click', () => {
      sampleCard.remove();
    });
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._selectorTemplate).content; // Необходимо использовать принимаемый в конструкторе template - так вроде же там селектор принимается
    const sampleCard = cardTemplate.querySelector('.card').cloneNode(true);
    return sampleCard;
  }

  render() {
    const sampleCard = this._getTemplate();
    const imageCard = sampleCard.querySelector('.card__mask-card');
    const nameCard = sampleCard.querySelector('.card__mesto');
    imageCard.src = this._link;
    imageCard.alt = this._name;
    nameCard.textContent = this._name;
    this._handleListener(sampleCard);
    return sampleCard;
  }
}

export default Card;
