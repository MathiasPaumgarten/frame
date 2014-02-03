define( [ "frame/math/point" ], function( point ) {

    describe( "math/point", function() {

        function testPoint( point, x, y ) {
            expect( point.x ).to.be( x );
            expect( point.y ).to.be( y );
        }

        it( "should set value point", function() {

            var p = point();

            p.set( 4, 7 );
            testPoint( p, 4, 7 );

            p.set( 10, 234 );
            testPoint( p, 10, 234 );

            p.set( { x: 43, y: 55 } );
            testPoint( p, 43, 55 );

            p = point( { x: -6, y: 133 } );
            testPoint( p, -6, 133 );

        } );

        it( "should add values", function() {

            var p = point().add( point( 4, 6 ) );
            testPoint( p, 4, 6 );

        } );

        it( "should subtract values", function() {

            var p = point( 100, 50 ).subtract( point( 20, 20 ) );
            testPoint( p, 80, 30 );

        } );

        it( "should devide values", function() {

            var p = point( 100, 50 ).devide( 2 );
            testPoint( p, 50, 25 );

        } );

        it( "should multiply values", function() {

            var p = point( 10, 15 ).multiply( 3 );
            testPoint( p, 30, 45 );

        } );

        it( "should return the length", function() {

            expect( point( 5, 0 ).length() ).to.be( 5 );
            expect( point( 3, 4 ).length() ).to.be( 5 );

        } );

        it ( "should normalize the point to length 1", function() {

            var p = point( 125, 345 ).normalize();
            expect( p.length() ).to.be( 1 );

        } );

        describe( "static methods", function() {

            it( "should add two points and return a new one", function() {

                var p = point.add( { x: 45, y: 100 }, { x: 13, y: 44 } );

                testPoint( p, 58, 144 );

            } );

            it( "should subtract two points and return a new one", function() {

                var p = point.subtract( { x: 45, y: 100 }, { x: 13, y: 44 } );

                testPoint( p, 32, 56 );

            } );

            it( "should return a new point interpolated between two anchors", function() {
                var a = point( 50, 50 );
                var b = point( 100, 100 );

                testPoint( point.interpolate( a, b, 0.5 ), 75, 75 );
                testPoint( point.interpolate( a, b, 0.2 ), 60, 60 );
            } );

        } );

    } );

} );