import { injectable } from "inversify";
import IBodyContainerProvider from "../interfaces/IBodyContainerProvider";

@injectable()
export default class BodyContainerProvider implements IBodyContainerProvider {
    get body(): Element {
        return document.querySelector('.page-body')
    }
}