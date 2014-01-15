define( [

    "../test/hasTranslate3D",
    "../test/hasTranslate",
    "./prefix"

], function( hasTranslate3D, hasTranslate, prefix ) {

    function prepareValue( value ) {
        if ( typeof value === "string" ) return value;
        else if ( value !== null ) return value + "px";
        return null;
    }

    function applyTranslate( element, x, y ) {
        var string = hasTranslate3D ?
            "translate3d( " + x + ", " + y + ", 0 )" :
            "translate( " + x + ", " + y + ")";

        element.style[ prefix( "transform" ) ] = string;
        element.style.transform = string;
    }

    function applyTopLeft( element, x, y ) {
        element.style.top = y;
        element.style.left = x;
    }

    return function( element, x, y ) {
        x = prepareValue( x || 0 );
        y = prepareValue( y || 0 );

        ( hasTranslate ? applyTranslate : applyTopLeft )( element, x , y );
    };

} );