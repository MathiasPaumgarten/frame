define( [ "./prefix" ], function( prefix ) {

    return function( element, matrix ) {

        var string = "matrix(" +
            matrix.a + "," +
            matrix.b + "," +
            matrix.c + "," +
            matrix.d + "," +
            matrix.tx + "," +
            matrix.ty + ")";

        element.style[ prefix( "transform" ) ] = string;
        element.style.transform = string;

    };

} );