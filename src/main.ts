import { Container } from "inversify";
import TYPES from "./interfaces/TYPES";
import IMainPresenter from "./interfaces/IMainPresenter";
import MainPresenter from "./presenters/MainPresenter";
import { IModel } from "./interfaces/IModel";
import { Model } from "./model/Model";

const container = new Container();
container.bind<IModel>(TYPES.Model).to(Model);
container.bind<IMainPresenter>(TYPES.MainPresenter).to(MainPresenter);

const presenter = container.get<IMainPresenter>(TYPES.MainPresenter);
presenter.init();