import IView from '../../interfaces/IView';
import { createElement } from '../../Render';
import './AbstractView.css';

/** @const {string} Класс, реализующий эффект "покачивания головой" */
const SHAKE_CLASS_NAME = 'shake';

/** @const {number} Время анимации в миллисекундах */
const SHAKE_ANIMATION_TIMEOUT = 600;

/**
 * Абстрактный класс представления
 */
export default abstract class AbstractView implements IView {
  /** @type {HTMLElement|null} Элемент представления */
  protected _element: Element = null;

  /** @type {Object} Объект с колбэками. Может использоваться для хранения обработчиков событий */
  _callback = {};

  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  /**
   * Геттер для получения элемента
   * @returns {HTMLElement} Элемент представления
   */
  get element() {
    if (!this._element) {
      this._element = createElement(this.template);
    }

    return this._element;
  }

  /**
   * Геттер для получения разметки элемента
   * @abstract
   * @returns {string} Разметка элемента в виде строки
   */
  get template(): string {
    throw new Error('Abstract method not implemented: get template');
  }

  /** Метод для удаления элемента */
  removeElement() {
    this._element = null;
  }
}