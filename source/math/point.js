define( [

    "mout/lang/createObject"

], function( createObject ) {

    var proto = {

        x: 0,
        y: 0,

        set: function( x, y ) {
            if ( typeof x === "object" ) {
                y = x.y;
                x = x.x;
            }

            this.x = x;
            this.y = y;

            return this;
        },

        add: function( other ) {
            this.x += other.x;
            this.y += other.y;

            return this;
        },

        subtract: function( other ) {
            this.x -= other.x;
            this.y -= other.y;

            return this;
        },

        multiply: function( value ) {
            this.x *= value;
            this.y *= value;

            return this;
        },

        devide: function( value ) {
            this.x /= value;
            this.y /= value;

            return this;
        },

        normalize: function() {
            this.devide( this.length() );

            return this;
        },

        length: function() {
            return Math.sqrt( this.x * this.x + this.y * this.y );
        }

    };

    function point( x, y ) {
        var p = createObject( proto );

        x = x || 0;
        y = y || 0;

        p.set( x, y );

        return p;
    }

    point.subtract = function( a, b ) {
        return point( a ).subtract( b );
    };

    point.add = function( a, b ) {
        return point( a ).add( b );
    };

    point.interpolate = function( a, b, percent ) {
        var difference = point.subtract( b, a ).multiply( percent );
        return point( a ).add( difference );
    };

    point.proto = proto;

    return point;

} );