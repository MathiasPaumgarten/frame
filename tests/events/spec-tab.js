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

        function sendEvents( closure ) {
            setTimeout( function() {
                var endEvent = document.createEvent( "Event" );
                endEvent.initEvent( "touchend", true, true );

                element.dispatchEvent( endEvent );
            }, 100 );

            setTimeout( function() {
                closure();
            }, 120 );

            var startEvent = document.createEvent( "Event" );
            startEvent.initEvent( "touchstart", true, true );

            element.dispatchEvent( startEvent );
        }

        it( "should trigger tab event", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            element.addEventListener( "tab", spy );

            sendEvents( function() {
                expect( spy.calledOnce ).to.be( true );
                handle.remove();
                done();
            } );

            handle.remove();
        } );

        it( "should bubble tab events", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            document.body.addEventListener( "tab", spy );

            sendEvents( function() {
                expect( spy.calledOnce ).to.be( true );
                handle.remove();
                done();
            } );

        } );

        it( "should stop triggering tab events", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            handle.remove();

            element.addEventListener( "tab", spy );

            sendEvents( function() {
                expect( spy.called ).to.be( false );
                done();
            } );

        } );

        it( "should be cancable", function( done ) {
            var handle = tab();
            var spy = sinon.spy();

            element.addEventListener( "tab", function( event ) {
                event.stopPropagation();
            } );

            document.body.addEventListener( "tab", spy );

            sendEvents( function() {
                expect( spy.called ).to.be( false );
                handle.remove();
                done();
            } );
        } );

    } );

} );
