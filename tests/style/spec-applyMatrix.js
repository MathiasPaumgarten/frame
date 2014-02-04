define( [ "frame/style/applyMatrix", "frame/math/matrix" ], function( applyMatrix, matrix ) {

    describe( "style/applyMatrix", function() {

        it ( "should apply matrix to element", function() {

            var value = matrix( 1, 2, 3, 4, 5, 6 );
            var dom = document.createElement( "div" );

            applyMatrix( dom, value );

            var available = [
                "-webkit-transform",
                "-moz-transform",
                "-ms-transform",
                "-o-transform",
                "transform"
            ];

            var count = 5;
            var found = false;
            var string = "matrix(1, 2, 3, 4, 5, 6)";

            while( count-- ) {
                if ( dom.style[ available[ count ] ] === string ) {
                    found = true;
                    break;
                }
            }

            expect( found ).to.be( true );

        } );

    } );

} );