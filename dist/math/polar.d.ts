import { IPoint } from "./point";
export interface IPolar {
    angle: number;
    distance: number;
}
export declare function cartesianToPolar(point: IPoint): IPolar;
export declare function polarToCaresian(polar: IPolar): IPoint;
