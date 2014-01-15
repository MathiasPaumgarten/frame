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

    } );

} );