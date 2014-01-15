define( [ "frame/events/scroll" ], function( scroll ) {

    describe( "events/scroll", function() {

        it( "should trigger event", function() {

            var node = document.createElement( "div" );
            var wheelEvent = new window.Event( "mousewheel" );
            var domWheelEvent = new window.Event( "DOMMouseScroll" );

            wheelEvent.wheelDelta = 100;
            domWheelEvent.detail = -100;

            scroll( node, function( delta, event ) {
                expect( delta ).to.be( 100 );
                expect( event ).to.be( event );
                expect( this ).to.be( node );
            } );

            node.dispatchEvent( wheelEvent );
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
