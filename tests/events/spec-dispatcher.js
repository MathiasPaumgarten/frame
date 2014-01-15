define( [ "frame/events/dispatcher", "mout/lang/createObject" ], function( dispatcher, createObject ) {

    describe( "events/dispatcher", function() {

        beforeEach( function() {
            this.emitter = dispatcher();
        } );

        afterEach( function() {
            delete this.emitter;
        } );

        it( "should register a listener", function() {

            var spy = sinon.spy();

            this.emitter.on( "event", spy );
            this.emitter.dispatch( "event" );

            expect( spy.calledOnce ).to.be( true );

        } );

        it ( "should pass arbitrary amount of argument", function() {

            var spy = sinon.spy();
            var argument = { foo: "bar" };

            this.emitter.on( "event", spy );
            this.emitter.dispatch( "event", argument, 3, "foo" );

            expect( spy.calledWith( argument, 3, "foo" ) ).to.be( true );

            this.emitter.dispatch( "event", true );

            expect( spy.calledWith( true ) ).to.be( true );
        } );

        it ( "should register multiple listeners", function() {

            var spyOne = sinon.spy();
            var spyTwo = sinon.spy();

            this.emitter.on( "event", spyOne );
            this.emitter.on( "event", spyTwo );
            this.emitter.dispatch( "event" );

            expect( spyOne.calledOnce ).to.be( true );
            expect( spyTwo.calledOnce ).to.be( true );

        } );

        it ( "should remove a listener", function() {

            var spy = sinon.spy();

            this.emitter.on( "event", spy );
            this.emitter.off( "event", spy );
            this.emitter.dispatch( "event" );

            expect( spy.callCount ).to.be( 0 );

        } );

        it ( "should remove all listeners with the same event", function() {

            var spyOne = sinon.spy();
            var spyTwo = sinon.spy();

            this.emitter.on( "event", spyOne );
            this.emitter.on( "event", spyTwo );
            this.emitter.off( "event" );
            this.emitter.dispatch( "event" );

            expect( spyOne.callCount ).to.be( 0 );
            expect( spyTwo.callCount ).to.be( 0 );

        } );

        it ( "should remove all listeners", function() {

            var spyOne = sinon.spy();
            var spyTwo = sinon.spy();
            var spyThree = sinon.spy();

            this.emitter.on( "foo", spyOne );
            this.emitter.on( "bar", spyTwo );
            this.emitter.on( "baz", spyThree );

            this.emitter.off();

            this.emitter.dispatch( "foo" );
            this.emitter.dispatch( "bar" );
            this.emitter.dispatch( "baz" );

            expect( spyOne.callCount ).to.be( 0 );
            expect( spyTwo.callCount ).to.be( 0 );
            expect( spyThree.callCount ).to.be( 0 );

        } );

        it ( "should call callback in context", function() {

            var context = { a: 0 };

            function onFoo() {
                this.a++;
            }

            this.emitter.on( "foo", onFoo, context );
            this.emitter.dispatch( "foo" );

            expect( context.a ).to.be( 1 );

        } );

        it ( "should expose the prototype", function() {
            var emitter = createObject( dispatcher.proto );

            expect( emitter ).to.eql( this.emitter );
        } );

        it ( "should test for listeners", function() {

            var noop = function() {};
            var context = {};

            expect( this.emitter.hasListener() ).to.be( false );

            this.emitter.on( "name", noop );

            expect( this.emitter.hasListener( "name" ) ).to.be( true );
            expect( this.emitter.hasListener( "name", noop ) ).to.be( true );
            expect( this.emitter.hasListener( "name", noop, context ) ).to.be( false );

            this.emitter.on( "name", noop, context );

            expect( this.emitter.hasListener( "name", noop, context ) ).to.be( true );

        } );

    } );

} );