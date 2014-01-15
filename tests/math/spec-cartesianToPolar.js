define( [ "frame/math/cartesianToPolar" ], function( cartesianToPolar ) {

    describe( "math/cartesianToPolar", function() {

        function approximatly( value, target ) {
            var epsilon = 0.001;
            expect( value ).to.be.within( target - epsilon, target + epsilon );
        }

        function testPoint( point, angle, distance ) {
            approximatly( point.angle, angle );
            approximatly( point.distance, distance );
        }

        it( "should convert polar coordinate to Cartesian", function() {

            testPoint( cartesianToPolar( 3, 4 ), 0.927, 5 );
            testPoint( cartesianToPolar( 0, 5 ), Math.PI / 2, 5 );
            testPoint( cartesianToPolar( 1, 1 ), Math.PI / 4, Math.sqrt( 2 ) );

        } );

    } );

} );