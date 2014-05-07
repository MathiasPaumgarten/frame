define( [ "frame/events/scroll" ], function( scroll ) {

    describe( "events/scroll", function() {

        it( "should trigger event for mousewheel", function() {

            var node = document.createElement( "div" );
            var wheelEvent = new window.Event( "mousewheel" );

            wheelEvent.wheelDelta = 120;

            scroll( node, function( delta, event ) {
                expect( delta ).to.be( 120 );
                expect( event ).to.be( event );
                expect( this ).to.be( node );
            } );

            node.dispatchEvent( wheelEvent );

        } );

        it( "should trigger event for DOMMouseScroll", function() {

            var node = document.createElement( "div" );
            var domWheelEvent = new window.Event( "DOMMouseScroll" );

            domWheelEvent.detail = -120;

            scroll( node, function( delta, event ) {
                expect( delta ).to.be( 120 );
                expect( event ).to.be( event );
                expect( this ).to.be( node );
            } );

            node.dispatchEvent( domWheelEvent );

        } );

        it( "should remove listener", function() {
            var node = document.createElement( "div" );
            var event = new window.Event( "mousewheel" );
            var spy = sinon.spy();

            var handler = scroll( node, spy );
            handler.remove();

            node.dispatchEvent( event );

            expect( spy.called ).to.be( false );
        } );

        it( "should carry context", function() {
            var node = document.createElement( "div" );
            var wheelEvent = new window.Event( "mousewheel" );
            var context = { foo: "bar" };

            scroll( node, function() {
                expect( this ).to.be( context );
            }, context );

            node.dispatchEvent( wheelEvent );
        } );

    } );

} );
