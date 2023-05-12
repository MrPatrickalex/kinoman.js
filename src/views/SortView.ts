import AbstractView from "../framework/view/AbstractView";
import IView from "../interfaces/IView";

const SORT_TYPE = ['default', 'date', 'rating']

const createItemTemplate = (type: string, active: string) => `
    <li><a href="#" class="sort__button ${type === active ? 'sort__button--active' : ''}">Sort by ${type}</a></li>
`;

const createSortTemplate = (active: string) => `
    <ul class="sort">
        ${SORT_TYPE.map(type => createItemTemplate(type, active)).join('')}
    </ul>
`;

export default class SortView extends AbstractView {
    get template(): string {
        return createSortTemplate('default');
    }
}