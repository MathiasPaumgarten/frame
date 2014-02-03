define( [ "frame/math/matrix" ], function( matrix ) {

    describe( "math/matrix", function() {

        it( "should set initial values", function() {
            var m = matrix( 1, 2, 3, 4, 5, 6 );

            expect( m.a ).to.be( 1 );
            expect( m.b ).to.be( 2 );
            expect( m.c ).to.be( 3 );
            expect( m.d ).to.be( 4 );
            expect( m.tx ).to.be( 5 );
            expect( m.ty ).to.be( 6 );
        } );

        it( "should translate the matrix", function() {
            var m = matrix();

            m.translate( 100, 50 );

            expect( m.tx ).to.be( 100 );
            expect( m.ty ).to.be( 50 );

            m.translate( -30, 14 );

            expect( m.tx ).to.be( 70 );
            expect( m.ty ).to.be( 64 );
        } );

        it( "should multiply matrices", function() {
            var a = matrix( 10, 13, 24, 45 );
            var b = matrix( 3, 2, 2, 565, 45, 43 );

            a.concatinate( b );

            expect( a.a ).to.be( 56 );
            expect( a.b ).to.be( 7365 );
            expect( a.c ).to.be( 162 );
            expect( a.d ).to.be( 25473 );
            expect( a.tx ).to.be( 45 );
            expect( a.ty ).to.be( 43 );
        } );

        it( "should rotate matrix", function() {

            var m = matrix();
            var angle = 1.1215;

            m.rotate( angle );

            expect( m.a ).to.be( Math.cos( angle ) );
            expect( m.b ).to.be( Math.sin( angle ) );
            expect( m.c ).to.be( - Math.sin( angle ) );
            expect( m.d ).to.be( Math.cos( angle ) );

        } );

        it( "should turn matrix into identity", function() {
            var m = matrix( 234, 34, 45, 67, 78, 89 );

            m.identity();

            expect( m.a ).to.be( 1 );
            expect( m.b ).to.be( 0 );
            expect( m.c ).to.be( 0 );
            expect( m.d ).to.be( 1 );
            expect( m.tx ).to.be( 0 );
            expect( m.ty ).to.be( 0 );
        } );

        it( "should support chaining", function() {

            var m = matrix();

            expect( m.identity().translate( 1, 1 ).rotate( 1 ).concatinate( matrix() ) ).to.be( m );

        } );

    } );

} );