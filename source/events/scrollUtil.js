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

    function onMouseWheel( delta ) {

        if ( Math.abs( delta ) > Math.abs( storeDelta ) + 10 ) {

            debounced( delta );
            storeDelta = delta;
            return;

        } else if ( delta === storeDelta && Math.abs( delta ) === 120 ) {
            debounced( delta );
        }

        storeDelta = delta;
    }

    function onTriggerWheel( delta ) {
        var eventName = delta < 0 ? "down" : "up";

        emitter.trigger( eventName );

        event.preventDefault();
        event.stopImmediatePropagation();

        return false;
    }

    function onKeyPress( event ) {
        var code = event.keyCode;

        if ( code === 38 || code === 40 ) {
            emitter.trigger( code === 38 ? "up" : "down" );
            event.stopPropagation();
            event.preventDefault();
        }
    }

    initEvents();

    return emitter;

} );