define( [ "frame/mobile/orientationLock" ], function( orientationLock ) {

    describe( "mobile/orientationLock", function() {

        var value;
        var lock;

        beforeEach( function() {
            value = window.orientation;
            this.element = document.createElement( "div" );
            this.element.style.display = "inline";
        } );

        afterEach( function() {
            lock.remove();
            window.orientation = value;
            delete this.element;
        } );

        it( "should execute initial value to none", function() {

            lock = orientationLock( this.element );
            expect( this.element.style.display ).to.be( "none" );
        } );

        it( "should execute initial value to block in horizontal", function() {

            window.orientation = 90;

            lock = orientationLock( this.element );
            expect( this.element.style.display ).to.be( "block" );
        } );

        it( "should set display to block on horizontal orientation", function() {

            lock = orientationLock( this.element );
            expect( this.element.style.display ).to.be( "none" );

            window.orientation = -90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );

            window.orientation = 90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );
        } );

        it( "should set display to block on vertical orientation", function() {

            lock = orientationLock( this.element, { orientation: "horizontal" } );
            expect( this.element.style.display ).to.be( "block" );

            window.orientation = 90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "none" );

            window.orientation = 0;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "block" );
        } );

        it( "should remove orientationLock", function() {

            lock = orientationLock( this.element );
            lock.remove();

            window.orientation = -90;
            window.dispatchEvent( new window.Event( "orientationchange" ) );

            expect( this.element.style.display ).to.be( "none" );

        } );

    } );

} );