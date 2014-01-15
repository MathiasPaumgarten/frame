( function() {
    /*jshint sub: true */

    var karma = window[ "__karma__" ];
    var tests = Object.keys( karma.files ).filter( function( file ) {
        return ( /\/tests\// ).test( file ) &&
              !( /\/tests\/runner.js/ ).test( file ) &&
              !( /\/tests\/resources/ ).test( file );
    } );

    require( {
        // Karma serves files from /base
        baseUrl: "/base",

        paths: {
            "mout": "node_modules/mout/src",
            "cane": "node_modules/cane/source",
            "frame": "source"
        }

    }, tests, karma.start );

}() );