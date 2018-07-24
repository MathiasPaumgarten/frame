import { IPoint } from "./point";

export class Bezier implements IPoint {

    x = 0;
    y = 0;

    get t(): number { return this._t; }
    set t( value: number ) {
        if ( value === this._t ) return;
        this._t = value;
        this.update();
    }

    private _t = 0;
    private anchors: IPoint[] = [];

    addAnchor( anchor: IPoint ) {
        this.anchors.push( { x: anchor.x, y: anchor.y } );
    }

    get(): IPoint {
        return { x: this.x, y: this.y };
    }

    private update() {
        const t = this.t;
        const anchors = this.anchors;
        const length = anchors.length;
        const points: IPoint[] = [];
        let i: number;
        let j: number;

        for ( i = 0; i < length; i++ ) {
            points[ i ] = { x: anchors[ i ].x, y: anchors[ i ].y };
        }

        for ( j = 1; j < length; ++j ) {
            for (i = 0; i < length - j; ++i ) {
                points[ i ].x = ( 1 - t ) * points[ i ].x + t * points[ ~~( i + 1 ) ].x;
                points[ i ].y = ( 1 - t ) * points[ i ].y + t * points[ ~~( i + 1 ) ].y;
            }
        }

        this.x = points[ 0 ].x;
        this.y = points[ 0 ].y;
    }
}
