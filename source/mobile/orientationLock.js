define( [ "mout/object/merge" ], function( merge ) {

    return function( element, options ) {

        options = merge( {
            orientation: "vertical"
        }, options || {} );

        function orientationChange() {
            var vertical = options.orientation === "vertical" ? "block" : "none";
            var horizontal = options.orientation === "vertical" ? "none" : "block";

            element.style.display = Math.abs( window.orientation || 0 ) === 90 ?
                vertical :
                horizontal;
        }

        window.addEventListener( "orientationchange", orientationChange );

        orientationChange();

    };

} );