define( [

    "./dispatcher",
    "./scroll",
    "mout/function/debounce"

], function( dispatcher, scroll, debounce ) {

    var scrollUtil = dispatcher();
    var storeDelta = 0;
    var debounced;
    var scrollHandle;

    function init() {
        debounced = debounce( onTriggerWheel, 100, true );
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

        scrollUtil.dispatch( eventName );

        event.preventDefault();
        event.stopImmediatePropagation();

        return false;
    }

    function onKeyPress( event ) {
        var code = event.keyCode;

        if ( code === 38 || code === 40 ) {
            scrollUtil.dispatch( code === 38 ? "up" : "down" );
            event.stopPropagation();
            event.preventDefault();
        }
    }

    scrollUtil.enable = function() {
        scrollUtil.disable();
        scrollHandle = scroll( document, onMouseWheel );

        document.addEventListener( "keyup", onKeyPress );
    };

    scrollUtil.disable = function() {
        if ( scrollHandle ) {
            scrollHandle.remove();
            scrollHandle = null;
        }

        document.removeEventListener( "keyup", onKeyPress );
    };

    init();

    return scrollUtil;

} );