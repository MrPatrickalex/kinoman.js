export default interface IView {
    get element(): Element;
    get template(): string;
    removeElement(): void;
}