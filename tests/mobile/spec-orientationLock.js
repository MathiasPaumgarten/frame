define( [ "frame/mobile/orientationLock" ], function( orientationLock ) {

    describe( "mobile/orientationLock", function() {

        var value;

        beforeEach( function() {
            value = window.orientation;
            this.element = document.createElement( "div" );
            this.element.style.display = "inline";
        } );

        afterEach( function() {
            window.orientation = value;
            delete this.element;
        } );

        it( "should execute initial value to none", function() {

            orientationLock( this.element );
            expect( this.element.style.display ).to.be( "none" );
        } );

        it( "should execute initial value to block in horizontal", function() {

            window.orientation = 90;

            orientationLock( this.element );
            expect( this.element.style.display ).to.be( "block" );
        } );

        it( "should set display to block on horizontal orientation", function() {

            orientationLock( this.element );
            expect( this.element.style.display ).to.be( "none" );

            window.orientation = -90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );

            window.orientation = 90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );
        } );

        it( "should set display to block on vertical orientation", function() {

            orientationLock( this.element, { orientation: "horizontal" } );
            expect( this.element.style.display ).to.be( "block" );

            window.orientation = 90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "none" );

            window.orientation = 0;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );
        } );

    } );

} );