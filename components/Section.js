export default class Section {
  constructor({ items, renderer }, selectorTemplate) {
    this._items = items;
    this._renderer = renderer;
    this._cardsContainer = document.querySelector(selectorTemplate);
  }
  //Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
  rendererCards() {
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }
  //Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  addItem(item) {
    this._cardsContainer.append(item);
  }
}
