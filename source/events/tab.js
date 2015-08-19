define( function() {

    return function() {

        function onTouchStart( event ) {
            var timeout;

            function onTouchEnd() {
                removeListener();

                var customEvent = document.createEvent( "Event" );
                customEvent.initEvent( "tab", true, true );

                event.target.dispatchEvent( customEvent );
            }

            function removeListener() {
                clearTimeout( timeout );
                document.removeEventListener( "touchend", onTouchEnd );
            }

            document.addEventListener( "touchend", onTouchEnd );

            timeout = setTimeout( removeListener, 300 );
        }

        document.addEventListener( "touchstart", onTouchStart );

        return {
            remove: function() {
                document.removeEventListener( "touchstart", onTouchStart );
            }
        };
    };

} );
