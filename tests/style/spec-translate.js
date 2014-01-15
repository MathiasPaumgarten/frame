define( [ "frame/style/translate" ], function( translate ) {

    describe( "style/translate", function() {

        beforeEach( function() {
            this.margin = document.body.style.margin;
            this.padding = document.body.style.padding;

            document.body.style.margin = "0";
            document.body.style.padding = "0";
        } );

        afterEach( function() {
            document.body.style.margin = this.margin;
            document.body.style.padding = this.padding;
        } );

        it( "should move an element by X and Y", function() {

            var div = document.createElement( "div" );
            document.body.appendChild( div );

            translate( div, 100, 150 );

            var bounding = div.getBoundingClientRect();

            expect( bounding.top ).to.be( 150 );
            expect( bounding.left ).to.be( 100 );

        } );

        it( "should accept string as value", function() {
            var div = document.createElement( "div" );
            document.body.appendChild( div );

            translate( div, "100px", "150px" );

            var bounding = div.getBoundingClientRect();

            expect( bounding.top ).to.be( 150 );
            expect( bounding.left ).to.be( 100 );
        } );

        it( "should only transfer X", function() {

            var div = document.createElement( "div" );
            document.body.appendChild( div );

            translate( div, 70 );

            var bounding = div.getBoundingClientRect();

            expect( bounding.top ).to.be( 0 );
            expect( bounding.left ).to.be( 70 );

        } );

    } );

} );
