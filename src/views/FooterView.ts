import AbstractView from "../framework/view/AbstractView";

const createFooterTemplate = () => `
    <footer class="footer">
        <section class="footer__logo logo logo--smaller">Cinemaddict</section>
        <section class="footer__statistics">
        <!-- Количество фильмов -->
        </section>
    </footer>
`;

export default class NavigationView extends AbstractView {
    get template(): string {
        return createFooterTemplate();
    }
}