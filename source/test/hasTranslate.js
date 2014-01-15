define( function() {

    var attributes = "transform WebkitTransform MozTransform OTransform msTransform".split( " " );
    var element = document.createElement( "div" );
    var index = 0;

    while( index <= 4  ) {
        if ( element.style[ attributes[ index++ ] ] !== undefined ) {
            return true;
        }
    }

    return false;

} );