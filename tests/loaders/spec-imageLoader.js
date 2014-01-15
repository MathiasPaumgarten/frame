define( [ "frame/loaders/imageLoader" ], function( imageLoader ) {

    describe( "loaders/imageLoader", function() {

        function isImageLoaded( image ) {
            if ( ! image.complete ) return false;
            if ( ! image.naturalWidth ) return false;

            return true;
        }

        it( "should load images successfully", function( done ) {

            var paths = [
                "base/tests/resources/1.jpg",
                "base/tests/resources/2.jpg",
                "base/tests/resources/3.jpg"
            ];

            var loader = imageLoader( paths );

            loader.on( "complete", function() {
                var images = loader.getImages() ;

                expect( isImageLoaded( images[ 0 ] ) ).to.be( true );
                expect( isImageLoaded( images[ 1 ] ) ).to.be( true );
                expect( isImageLoaded( images[ 2 ] ) ).to.be( true );

                done();
            } );

        } );

        it ( "should call error callback and complete", function( done ) {

            this.timeout = 10000;

            var paths = [
                "base/tests/resources/1.jpg",
                "base/tests/resources/2.jpg",
                "base/tests/resources/4.jpg"
            ];

            var spy = sinon.spy();
            var loader = imageLoader( paths );

            loader.on( "error", spy );
            loader.on( "complete", function() {

                var images = loader.getImages() ;
                var location = window.location;
                var path = location.protocol + "//" + location.hostname + ":9876/";

                expect( isImageLoaded( images[ 0 ] ) ).to.be( true );
                expect( isImageLoaded( images[ 1 ] ) ).to.be( true );
                expect( isImageLoaded( images[ 2 ] ) ).to.be( false );

                expect( spy.called ).to.be( true );
                expect( spy.calledWith( path + "base/tests/resources/4.jpg" ) ).to.be( true );

                done();
            } );

        } );

    } );

} );