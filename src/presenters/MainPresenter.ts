import { injectable, inject } from "inversify";
import "reflect-metadata";
import IMainPresenter from "../interfaces/IMainPresenter";
import { IModel } from "../interfaces/IModel";
import TYPES from "../interfaces/TYPES";

@injectable()
export default class MainPresenter implements IMainPresenter {
    private _model: IModel;

    constructor(@inject(TYPES.Model) model: IModel) {
        this._model = model;
    }

    init(): void {
        // тут вьюхи инициализировать.
        console.log("asd" + this._model);
    }
}