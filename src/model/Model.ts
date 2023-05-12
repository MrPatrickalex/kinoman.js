import { injectable, inject } from "inversify";
import "reflect-metadata";
import { IModel } from "../interfaces/IModel";

@injectable()
export class Model implements IModel {
}