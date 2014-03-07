define( [ "frame/events/tab" ], function( tab ) {

    describe( "events/tab", function() {

        var element;

        beforeEach( function() {
            element = document.createElement( "div" );
            document.body.appendChild( element );
        } );

        afterEach( function() {
            document.body.removeChild( element );
        } );

        function sendEvents() {
            setTimeout( function() {
                var endEvent = document.createEvent( "Event" );
                endEvent.initEvent( "touchend", true, true );

                element.dispatchEvent( endEvent );
            }, 100 );

            var startEvent = document.createEvent( "Event" );
            startEvent.initEvent( "touchstart", true, true );

            element.dispatchEvent( startEvent );
        }

        it( "should trigger tab event", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            element.addEventListener( "tab", spy );

            sendEvents();

            setTimeout( function() {
                expect( spy.calledOnce ).to.be( true );
                handle.remove();
                done();
            }, 120 );

            handle.remove();
        } );

        it( "should stop triggering tab events", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            handle.remove();

            element.addEventListener( "tab", spy );

            sendEvents();

            setTimeout( function() {
                expect( spy.called ).to.be( false );
                done();
            }, 120 );

        } );

    } );

} );
