define( [

    "mout/lang/toArray"

], function( toArray ) {

    var style = window.getComputedStyle( document.documentElement, "" );
    var styles = toArray( style );
    var abbreviation = styles.join( " " ).match( /-(o|moz|webkit|ms)-/ )[ 0 ] || "";

    var prefix = function( value ) {
        return abbreviation + value;
    };

    prefix.css = abbreviation;

    return prefix;

} );