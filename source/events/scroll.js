define( [

    "mout/number/sign"

], function( sign ) {

    return function( target, callback, context ) {

        function onMouseWheel( event ) {
            callback.call( context ? context : this, event.wheelDelta, event );
        }

        function onDOMMouseWheel( event ) {
            var delta = 120 * sign( event.detail * -1 );
            callback.call( context ? context : this, delta, event );
        }

        target.addEventListener( "mousewheel", onMouseWheel );
        target.addEventListener( "DOMMouseScroll", onDOMMouseWheel );

        return {
            remove: function() {
                target.removeEventListener( "mousewheel", onMouseWheel );
                target.removeEventListener( "DOMMouseScroll", onDOMMouseWheel );
            }
        };
    };
} );