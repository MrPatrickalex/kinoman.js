import AbstractView from "../framework/view/AbstractView";

const createHeaderTemplate = () => `
    <header class="header">
        <h1 class="header__logo logo">Cinemaddict</h1>

        <section class="header__profile profile">
        <p class="profile__rating">Movie Buff</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
        </section>
    </header>
`;

export default class HeaderView extends AbstractView {
    get template(): string {
        return createHeaderTemplate();
    }
}