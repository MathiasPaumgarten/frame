import { IPoint } from "./point";
export declare class Bezier implements IPoint {
    x: number;
    y: number;
    t: number;
    private _t;
    private anchors;
    addAnchor(anchor: IPoint): void;
    get(): IPoint;
    private update;
}
