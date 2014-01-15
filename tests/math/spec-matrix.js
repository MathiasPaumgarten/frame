define( [ "frame/math/matrix" ], function( matrix ) {

    describe( "math/matrix", function() {

        it( "should set initial values", function() {
            var m = matrix( 1, 2, 3, 4, 5, 6 );

            expect( m.a ).to.be( 1 );
            expect( m.b ).to.be( 2 );
            expect( m.c ).to.be( 3 );
            expect( m.d ).to.be( 4 );
            expect( m.tx ).to.be( 5 );
            expect( m.ty ).to.be( 6 );
        } );

        // TODO: needs to be tested

    } );

} );