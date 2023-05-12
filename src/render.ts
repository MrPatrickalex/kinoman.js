import IView from "./interfaces/IView";

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function createElement(template: string): Element {
  const newElement: Element = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component: IView, container: HTMLElement, place: InsertPosition): void {
  container.insertAdjacentElement(place, component.element);
}

export { RenderPosition, createElement, render };
