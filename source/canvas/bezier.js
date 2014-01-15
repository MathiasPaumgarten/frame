define( function() {

    return function( context, points ) {

        var a, b, x, y;

        for ( var i = 1, length = points.length - 2; i < length; i++ ) {

            a = points[ i ];
            b = points[ i + 1 ];

            x = ( a.x + b.x ) * 0.5;
            y = ( a.y + b.y ) * 0.5;

            context.quadraticCurveTo( a.x, a.y, x, y );
        }

        a = points[ i ];
        b = points[ i + 1 ];

        context.quadraticCurveTo( a.x, a.y, b.x, b.y );
    };

} );