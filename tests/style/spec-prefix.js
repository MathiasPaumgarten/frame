define( [ "frame/style/prefix" ], function( prefix ) {

    describe( "style/prefix", function() {

        it ( "should return prefixed value", function() {

            var value = prefix( "transform" );

            var available = [
                "-webkit-transform",
                "-moz-transform",
                "-ms-transform",
                "-o-transform",
                "transform"
            ].indexOf( value ) > -1;

            expect( available ).to.be( true );

        } );

        it( "should return prefix", function() {

            var available = [
                "-webkit-",
                "-moz-",
                "-ms-",
                "-o-",
                ""
            ].indexOf( prefix.css ) > -1;

            expect( available ).to.be( true );

        } );

    } );

} );