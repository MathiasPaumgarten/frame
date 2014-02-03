define( [

    "./dispatcher",
    "./scroll",
    "mout/function/debounce"

], function( dispatcher, scroll, debounce ) {

    var emitter = dispatcher();
    var storeDelta = 0;
    var debounced;

    function initEvents() {
        debounced = debounce( onTriggerWheel, 100, true );

        scroll( document, onMouseWheel );
        document.addEventListener( "keyup", onKeyPress );
    }

    function onMouseWheel( delta, event ) {

        if ( Math.abs( delta ) > Math.abs( storeDelta ) + 10 ) {
            debounced( delta, event );
        } else if ( delta === storeDelta && Math.abs( delta ) === 120 ) {
            debounced( delta, event );
        }

        storeDelta = delta;
    }

    function onTriggerWheel( delta, event ) {
        var eventName = delta < 0 ? "down" : "up";

        emitter.dispatch( eventName );

        event.preventDefault();
        event.stopImmediatePropagation();

        return false;
    }

    function onKeyPress( event ) {
        var code = event.keyCode;

        if ( code === 38 || code === 40 ) {
            emitter.dispatch( code === 38 ? "up" : "down" );
            event.stopPropagation();
            event.preventDefault();
        }
    }

    initEvents();

    return emitter;

} );