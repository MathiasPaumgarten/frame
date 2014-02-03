define( [

    "../math/bezier",
    "../math/polarToCartesian",
    "../math/point",
    "mout/lang/createObject",
    "mout/random/rand"

], function( bezier, polarToCartesian, point, createObject, rand ) {

    function InsectMotion( radius, speed ) {

        speed = speed || 0.01;

        var points = [];
        var curve;
        var current = 0;

        function init() {
            points.push( getRandomPoint() );
            points.push( getRandomPoint() );
            points.push( getRandomPoint() );

            initCurve();
        }

        function initCurve() {
            curve = bezier();
            curve.addAnchor( point.interpolate( points[ 0 ], points[ 1 ], 0.5 ) );
            curve.addAnchor( points[ 1 ] );
            curve.addAnchor( point.interpolate( points[ 1 ], points[ 2 ], 0.5 ) );
        }

        function getRandomPoint() {
            return point(
                polarToCartesian(
                    Math.random() * Math.PI * 2,
                    rand( radius / 3, radius )
                )
            );
        }

        this.update = function() {
            current += speed;

            if ( current >= 1 ) {
                points.shift();
                points.push( getRandomPoint() );
                initCurve();
                current -= 1;
            }

            curve.setPosition( current );
        };

        this.getPosition = function() {
            return curve.get();
        };

        init();
    }

    return function( radius, speed ) {
        return new InsectMotion( radius, speed );
    };

} );