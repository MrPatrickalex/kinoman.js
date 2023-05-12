import { Container } from "inversify";
import TYPES from "./interfaces/TYPES";
import IMainPresenter from "./interfaces/IMainPresenter";
import MainPresenter from "./presenters/MainPresenter";
import { IModel } from "./interfaces/IModel";
import { Model } from "./model/Model";
import IBodyContainerProvider from "./interfaces/IBodyContainerProvider";
import BodyContainerProvider from "./services/BodyContainerProvider";

const bodyContainer = document.querySelector('.page-body');

const container = new Container();
container.bind<IModel>(TYPES.Model).to(Model);
container.bind<IMainPresenter>(TYPES.MainPresenter).to(MainPresenter);
container.bind<IBodyContainerProvider>(TYPES.BodyContainer).to(BodyContainerProvider);

const presenter = container.get<IMainPresenter>(TYPES.MainPresenter);
presenter.init();