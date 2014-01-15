// Based on:
// https://gist.github.com/lorenzopolidori/3794226

define( function() {

    var element = document.createElement( "p" );
    var has3d;
    var transforms = {
        "webkitTransform": "-webkit-transform",
        "OTransform": "-o-transform",
        "msTransform": "-ms-transform",
        "MozTransform": "-moz-transform",
        "transform": "transform"
    };

    document.body.insertBefore( element, null );

    for( var t in transforms ) {
        if( element.style[ t ] !== undefined ) {
            element.style[ t ] = "translate3d(1px,1px,1px)";
            has3d = window.getComputedStyle( element ).getPropertyValue( transforms[ t ] );
        }
    }

    document.body.removeChild( element );

    return ( has3d !== undefined && has3d.length > 0 && has3d !== "none" );

} );