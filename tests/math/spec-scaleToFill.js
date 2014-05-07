define( [ "frame/math/scaleToFill" ], function( scaleToFill ) {

    describe( "math/scaleToFill", function() {

        it( "should return scaled values", function() {

            var parent = { width: 100, height: 100 };
            var child1 = { width: 100, height: 100 };
            var child2 = { width: 300, height: 50 };
            var child3 = { width: 20, height: 100 };
            var child4 = { width: 400, height: 600 };

            expect( scaleToFill( parent, child1 ) ).to.eql( {
                scale: 1,
                width: 100,
                height: 100,
                x: 0,
                y: 0
            } );

            expect( scaleToFill( parent, child2 ) ).to.eql( {
                scale: 2,
                height: 100,
                width: 600,
                x: -250,
                y: 0
            } );

            expect( scaleToFill( parent, child3 ) ).to.eql( {
                scale: 5,
                width: 100,
                height: 500,
                x: 0,
                y: -200
            } );

            expect( scaleToFill( parent, child4 ) ).to.eql( {
                scale: 0.25,
                width: 100,
                height: 150,
                x: 0,
                y: -25
            } );

        } );

    } );

} );