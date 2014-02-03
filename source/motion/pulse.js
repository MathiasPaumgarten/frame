define( [

    "mout/random/rand"

], function( rand ) {

    var TAU = Math.PI * 2;

    function Wave( min, max, speed ) {

        speed = speed || 0.01;

        if ( min > max ) {
            var temp = min;
            min = max;
            max = temp;
        }

        var current = 0;
        var value = min;
        var middle = ( max + min ) / 2;
        var valley, peak;

        function setAnchors() {
            valley = rand( min, middle ) - middle;
            peak = rand( middle, max ) - middle;
        }

        this.update = function() {
            current += speed;

            if ( current >= 1 ) {
                current -= 1;
                setAnchors();
            }

            value = middle + Math.sin( current * TAU ) * ( current < 0.5 ? peak : - valley );
        };

        this.get = function() {
            return value;
        };

        setAnchors();
    }

    return function( min, max, speed ) {
        return new Wave( min, max, speed );
    };

} );