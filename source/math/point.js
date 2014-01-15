define( [

    "mout/lang/createObject"

], function( createObject ) {

    var proto = {

        x: 0,
        y: 0,

        set: function( x, y ) {
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

    point.proto = proto;

    return point;

} );