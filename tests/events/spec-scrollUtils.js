define( [ "frame/events/scrollUtil" ], function( scrollUtil ) {

    describe( "events/scrollUtil", function() {

        it( "should trigger only one event", function( done ) {

            var spy = sinon.spy();
            var event = new window.Event( "mousewheel", true, true );
            event.wheelDelta = 100;

            function dispatch() {
                document.dispatchEvent( event );
            }

            scrollUtil.on( "up", spy );

            setTimeout( dispatch, 4 );
            setTimeout( dispatch, 10 );
            setTimeout( dispatch, 15 );
            setTimeout( dispatch, 50 );
            setTimeout( dispatch, 55 );

            setTimeout( function() {
                expect( spy.callCount ).to.be( 1 );
                done();
            }, 60 );

        } );

        // it( "should only trigger an event after increasing the scroll amount", function( done ) {

        //     var event = new window.Event( "mousewheel", true, true );
        //     var spy = sinon.spy();

        //     function dispatch( value ) {
        //         event.wheelDelta = value;
        //         document.dispatchEvent( event );
        //     }

        //     scrollUtil.on( "up", spy );

        //     setTimeout( dispatch, 4, 30 );
        //     setTimeout( dispatch, 10, 25 );
        //     setTimeout( dispatch, 15, 22 );

        //     setTimeout( dispatch, 155, 60  );
        //     setTimeout( dispatch, 160, 50 );
        //     setTimeout( dispatch, 165, 32 );

        //     setTimeout( function() {
        //         expect( spy.callCount ).to.be( 1 );
        //     }, 10 );

        //     setTimeout( function() {
        //         expect( spy.callCount ).to.be( 2 );
        //         done();
        //     }, 300 );

        // } );

    } );

} );
