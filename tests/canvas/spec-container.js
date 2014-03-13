define( [ "frame/canvas/container" ], function( container ) {

    describe( "canvas/container", function() {

        it( "should append objects as children", function() {

            var element = container();
            var a = {}, b = {}, c = {};

            element.append( a );
            element.append( b );
            element.append( c );

            expect( element.children.length ).to.be( 3 );
            expect( element.children[ 0 ] ).to.be( a );
            expect( element.children[ 1 ] ).to.be( b );
            expect( element.children[ 2 ] ).to.be( c );

            expect( a.parent ).to.be( element );
            expect( b.parent ).to.be( element );
            expect( c.parent ).to.be( element );

        } );

        it( "should prepend elements to children array", function() {

            var element = container();
            var a = {}, b = {}, c = {};

            element.prepend( a );
            element.prepend( b );
            element.prepend( c );

            expect( element.children.length ).to.be( 3 );
            expect( element.children[ 0 ] ).to.be( c );
            expect( element.children[ 1 ] ).to.be( b );
            expect( element.children[ 2 ] ).to.be( a );

            expect( a.parent ).to.be( element );
            expect( b.parent ).to.be( element );
            expect( c.parent ).to.be( element );

        } );

        it( "should remove an element", function() {
            var element = container();
            var child = container();

            element.append( child );

            expect( child.parent ).to.be( element );

            element.remove( child );

            expect( element.children.length ).to.be( 0 );
            expect( child.parent ).to.be( null );
        } );

        it( "should add element at index", function() {

            var parent = container();
            var a = {}, b = {}, c = {}, d = {};

            parent.insert( a, 5 );

            expect( parent.children[ 0 ] ).to.be( a );

            parent.insert( b, 0 );

            expect( parent.children[ 0 ] ).to.be( b );
            expect( parent.children[ 1 ] ).to.be( a );

            parent.insert( c, 1 );

            expect( parent.children[ 0 ] ).to.be( b );
            expect( parent.children[ 1 ] ).to.be( c );
            expect( parent.children[ 2 ] ).to.be( a );

            parent.insert( d, 1 );

            expect( parent.children[ 0 ] ).to.be( b );
            expect( parent.children[ 1 ] ).to.be( d );
            expect( parent.children[ 2 ] ).to.be( c );
            expect( parent.children[ 3 ] ).to.be( a );

        } );

        it( "should call draw and update recursivly", function() {

            var parent = container();

            var childA = container();
            var childB = container();

            var leafA = {
                draw: sinon.spy(),
                update: sinon.spy()
            };

            var leafB = {
                draw: sinon.spy(),
                update: sinon.spy()
            };

            parent.append( childA );
            parent.append( childB );

            childA.append( leafA );
            childB.append( leafB );

            parent.update();

            expect( leafA.update.calledOnce ).to.be( true );
            expect( leafB.update.calledOnce ).to.be( true );

            parent.draw();

            expect( leafA.draw.calledOnce ).to.be( true );
            expect( leafB.draw.calledOnce ).to.be( true );

        } );

    } );

} );