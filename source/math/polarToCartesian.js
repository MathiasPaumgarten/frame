define( function() {

    return function( angle, distance ) {
        return {
            x: Math.cos( angle ) * distance,
            y: Math.sin( angle ) * distance
        };
    };

} );