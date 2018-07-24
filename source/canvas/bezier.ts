import { IPoint } from "../math/point";

export function bezier( context: CanvasRenderingContext2D, points: IPoint[] ) {
    let a: IPoint;
    let b: IPoint;
    let i: number;
    let x: number;
    let y: number;

    for ( i = 1, length = points.length - 2; i < length; i++ ) {

        a = points[ i ];
        b = points[ i + 1 ];

        x = ( a.x + b.x ) * 0.5;
        y = ( a.y + b.y ) * 0.5;

        context.quadraticCurveTo( a.x, a.y, x, y );
    }

    a = points[ i ];
    b = points[ i + 1 ];

    context.quadraticCurveTo( a.x, a.y, b.x, b.y );
}
