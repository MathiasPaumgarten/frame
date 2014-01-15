define( function() {

    return function( x, y ) {
        return {
            distance: Math.sqrt( x * x + y * y ),
            angle: Math.atan( y / x )
        };
    };

} );