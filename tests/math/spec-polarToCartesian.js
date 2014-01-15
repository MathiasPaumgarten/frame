define( [ "frame/math/polarToCartesian" ], function( polarToCartesian ) {

    describe( "math/polarToCartesian", function() {

        function approximatly( value, target ) {
            var epsilon = 0.001;
            expect( value ).to.be.within( target - epsilon, target + epsilon );
        }

        function testPoint( point, x, y ) {
            approximatly( point.x, x );
            approximatly( point.y, y );
        }

        it( "should convert polar coordinates to Cartesian", function() {

            testPoint( polarToCartesian( Math.PI, 5 ), -5, 0 );
            testPoint( polarToCartesian( Math.PI / 4, 1 ), 0.707, 0.707 );
            testPoint( polarToCartesian( Math.PI / 2, 5 ), 0, 5 );

        } );

    } );

} );