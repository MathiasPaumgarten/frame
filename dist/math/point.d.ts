export interface IPoint {
    x: number;
    y: number;
}
export declare class Point implements IPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
    static subtract(a: Point, b: Point): Point;
    static add(a: Point, b: Point): Point;
    static interpolate(a: Point, b: Point, percent: number): Point;
    set(x: Point | number, y?: number): this;
    add(other: Point): this;
    subtract(other: Point): this;
    multiply(scalar: number): this;
    divide(scalar: number): this;
    normalize(): this;
    clone(): Point;
    readonly length: number;
}
