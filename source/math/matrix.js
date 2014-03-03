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
            angle = angle % Math.PI;

            var self = this;
            var cos = Math.cos( angle );
            var sin = Math.sin( angle );

            var storeA = this.a;
            var storeC = this.c;
            var storeX = this.tx;

            self.a = storeA * cos - self.b * sin;
            self.b = storeA * sin + self.b * cos;
            self.c = storeC * cos - self.d * sin;
            self.d = storeC * sin + self.d * cos;
            self.tx = storeX * cos - self.ty * sin;
            self.ty = storeX * sin + self.ty * cos;

            return self;
        },

        translate: function( x, y ) {
            this.tx += x;
            this.ty += y;

            return this;
        },

        scale: function( x, y ) {
            var self = this;

            if ( typeof y === "undefined" ) y = x;

            self.a *= x;
            self.b *= y;
            self.c *= x;
            self.d *= y;
            self.tx *= x;
            self.ty *= y;

            return self;
        },

        concatinate: function( other ) {
            var storeX = this.tx;
            var a = other.a;
            var b = other.b;
            var c = other.c;
            var d = other.d;
            var tx = other.tx;
            var ty = other.ty;
            var self = this;

            if ( a !== 1 || b !== 0 || c !== 0 || d !== 1 ) {

                var storeA = self.a;
                var storeC = self.c;

                self.a  = storeA * a + self.b * c;
                self.b  = storeA * b + self.b * d;
                self.c  = storeC * a + self.d * c;
                self.d  = storeC * b + self.d * d;
            }

            self.tx = storeX * a + self.ty * c + tx;
            self.ty = storeX * b + self.ty * d + ty;

            return self;
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