import { injectable, inject } from "inversify";
import "reflect-metadata";
import IMainPresenter from "../interfaces/IMainPresenter";
import { IModel } from "../interfaces/IModel";
import TYPES from "../interfaces/TYPES";
import IBodyContainerProvider from "../interfaces/IBodyContainerProvider";
import HeaderView from "../views/HeaderView";
import { render } from "../Render";
import MainView from "../views/MainView";
import FooterView from "../views/FooterView";
import NavigationView from "../views/NavigationView";
import SortView from "../views/SortView";

@injectable()
export default class MainPresenter implements IMainPresenter {
    private _model: IModel;
    private _bodyContainer: Element;

    constructor(
        @inject(TYPES.Model) model: IModel,
        @inject(TYPES.BodyContainer) bodyProvider: IBodyContainerProvider
    ) {
        this._model = model;
        this._bodyContainer = bodyProvider.body;
    }

    init(): void {
        // тут вьюхи инициализировать.
        const headerView = new HeaderView();
        const mainView = new MainView();
        const footerView = new FooterView();
        const navigationView = new NavigationView();
        const sortView = new SortView();

        render(headerView, this._bodyContainer, 'afterbegin');
        render(mainView, this._bodyContainer, 'beforeend');
        render(footerView, this._bodyContainer, 'beforeend');
        render(navigationView, mainView.element, 'afterbegin');
        render(sortView, mainView.element, 'beforeend');
    }
}