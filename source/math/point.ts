export interface IPoint {
    x: number;
    y: number;
}

export class Point implements IPoint {

    constructor( public x: number, public y: number ) {}

    static subtract( a: Point, b: Point ): Point {
        return a.clone().subtract( b );
    }

    static add( a: Point, b: Point ) {
        return a.clone().add( b );
    }

    static interpolate( a: Point, b: Point, percent: number ) {
        const difference: Point = Point.subtract( b, a ).multiply( percent );
        return a.clone().add( difference );
    }

    set( x: Point | number, y?: number ): this {
        if ( typeof x === "number" ) {
            this.x = x;
            this.y = y || this.y;
        } else {
            this.x = x.x;
            this.y = x.y;
        }

        return this;
    }

    add( other: Point ): this {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    subtract( other: Point ): this {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }

    multiply( scalar: number ): this {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }

    divide( scalar: number ): this {
        this.x /= scalar;
        this.y /= scalar;

        return this;
    }

    normalize() {
        this.divide( this.length );

        return this;
    }

    clone(): Point {
        return new Point( this.x, this.y );
    }

    get length(): number {
        return Math.sqrt( this.x * this.x + this.y * this.y );
    }

}
