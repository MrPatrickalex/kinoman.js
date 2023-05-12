import AbstractView from "../framework/view/AbstractView";

const createMainTemplate = () => `
    <main class="main">
        <!-- Меню -->
        <!-- Сортировка -->
        <!-- Контент -->
    </main>
`;

export default class MainView extends AbstractView {
    get template(): string {
        return createMainTemplate();
    }
}