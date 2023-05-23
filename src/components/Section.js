export default class Section {
  constructor(selectorTemplate, renderer) {
    //this._items = items.reverse();
    //this._renderer = renderer();
    this._cardsContainer = document.querySelector(selectorTemplate);
  }
  //Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
  renderCards({ items, renderer }) {
    items.forEach((item) => {
      this.addItem(renderer(item));
    });
  }
  //Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(item) {
    this._cardsContainer.prepend(item);
  }
}
