define( function() {

    return function( parent, child ) {

        var scale = Math.max( parent.width / child.width, parent.height / child.height );

        var width = child.width * scale;
        var height = child.height * scale;

        return {
            scale: scale,
            width: width,
            height: height,
            x: parent.width / 2 - width / 2,
            y: parent.height / 2 - height / 2,
        };

    };

} );
