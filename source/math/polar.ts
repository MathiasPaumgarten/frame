import { IPoint } from "./point";

export interface IPolar {
    angle: number;
    distance: number;
}


export function cartesianToPolar( point: IPoint ): IPolar {
    return {
        distance: Math.sqrt( point.x * point.x + point.y * point.y ),
        angle: Math.atan( point.y / point.x ),
    };
}

export function polarToCaresian( polar: IPolar ): IPoint {
    return {
        x: Math.cos( polar.angle ) * polar.distance,
        y: Math.sin( polar.angle ) * polar.distance,
    };
}
