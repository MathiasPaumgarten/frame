define( [

    "../events/dispatcher",
    "mout/array/forEach"

], function( dispatcher, forEach ) {

    return function( paths ) {

        var api = dispatcher();
        var loaded = 0;
        var total = paths.length;
        var image;
        var images = [];

        function onLoaded() {
            api.dispatch( "progress", ++loaded / total );

            if ( loaded === total ) {
                api.dispatch( "complete" );
            }
        }

        function onError() {
            loaded++;

            api.dispatch( "error", this.src );

            if ( loaded === total ) {
                api.dispatch( "complete" );
            }
        }

        forEach( paths, function( path ) {
            image = new Image();
            image.onload = onLoaded;
            image.onerror = onError;
            image.src = path;

            images.push( image );
        } );

        api.getImages = function() {
            return images;
        };

        return api;
    };

} );