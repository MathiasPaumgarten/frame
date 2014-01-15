define( [

    "mout/lang/createObject"

], function( createObject ) {

    var proto = {

        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0,

        identity: function() {
            var self = this;

            self.a = self.d = 1;
            self.b = self.c = self.tx = self.ty = 0;

            return this;
        },

        rotate: function( angle ) {
            var cos = Math.cos( angle );
            var sin = Math.sin( angle );

            var storeA = this.a;
            var storeC = this.c;
            var storeX = this.tx;

            this.a = storeA * cos - this.b * sin;
            this.b = storeA * sin + this.b * cos;
            this.c = storeC * cos - this.d * sin;
            this.d = storeC * sin + this.d * cos;
            this.tx = storeX * cos - this.ty * sin;
            this.ty = storeX * sin + this.ty * cos;

            return this;
        },

        translate: function( x, y ) {
            this.tx += x;
            this.ty += y;

            return this;
        },

        concatinate: function( other ) {
            var storeX = this.tx;
            var a = other.a;
            var b = other.b;
            var c = other.c;
            var d = other.d;
            var tx = other.tx;
            var ty = other.ty;

            if ( a !== 1 || b !== 0 || c !== 0 || d !== 1 ) {

                var storeA = this.a;
                var storeC = this.c;

                this.a  = storeA * a + this.b * c;
                this.b  = storeA * b + this.b * d;
                this.c  = storeC * a + this.d * c;
                this.d  = storeC * b + this.d * d;
            }

            this.tx = storeX * a + this.ty * c + tx;
            this.ty = storeX * b + this.ty * d + ty;

            return this;
        }

    };

    function matrix( a, b, c, d, tx, ty ) {
        var m = createObject( proto );

        m.a = typeof a === "undefined" ? 1 : a;
        m.b = b || 0;
        m.c = c || 0;
        m.d = typeof d === "undefined" ? 1 : d;
        m.tx = tx || 0;
        m.ty = ty || 0;

        return m;
    }

    matrix.proto = proto;

    return matrix;

} );