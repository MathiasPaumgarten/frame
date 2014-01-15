define( function() {

    return function( target, callback, context ) {

        function onMouseWheel( event ) {
            var delta = event.detail * -1 || event.wheelDelta;
            callback.call( context ? context : this, delta, event );
        }

        target.addEventListener( "mousewheel", onMouseWheel );
        target.addEventListener( "DOMMouseScroll", onMouseWheel );

        return {
            remove: function() {
                target.removeEventListener( "mousewheel", onMouseWheel );
                target.removeEventListener( "DOMMouseScroll", onMouseWheel );
            }
        };

    };

} );
