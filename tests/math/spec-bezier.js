// TODO: you call this a test, bro?
// What is wrong with you??


define( [ "frame/math/bezier" ], function( bezier ) {

    describe( "math/bezier", function() {

        it( "should calculate the postion of beizer curve", function() {

            var b = bezier();

            b.addAnchor( { x: 0, y: 0 } );
            b.addAnchor( { x: 0, y: 100 } );
            b.addAnchor( { x: 100, y: 100 } );
            b.addAnchor( { x: 100, y: 0 } );

            b.setPosition( 0.5 );

            expect( b.x ).to.be( 50 );
            expect( b.y ).to.be( 75 );

        } );

    } );

} );