define( [

    "mout/lang/createObject"

], function( createObject ) {

    var proto = {

        t: 0,

        addAnchor: function( point ) {
            if ( ! this.anchors ) this.anchors = [];

            this.anchors.push( { x: point.x, y: point.y } );
            this.update();
        },

        setPosition: function( value ) {
            this.t = value;
            this.update();
        },

        update: function() {
            var t = this.t || 0;
            var anchors = this.anchors || [];
            var length = anchors.length;
            var points = [];
            var i, j;

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
        },

        get: function() {
            return { x: this.x, y: this.y };
        }

    };

    function bezier() {
        return createObject( proto );
    }

    bezier.proto = proto;

    return bezier;
} );