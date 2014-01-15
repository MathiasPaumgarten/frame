define( [

    "mout/array/findIndex",
    "mout/lang/createObject"

], function( findIndex, createObject ) {

    var proto = {
        on: function( name, callback, context ) {
            if ( ! this.listeners ) this.listeners = [];
            else if ( findIndex( this.listeners, {
                name: name,
                callback: callback,
                context: context
            } ) > 0 ) return;

            this.listeners.push( { name: name, callback: callback, context: context } );
        },

        off: function( name, callback ) {
            if ( ! this.listeners ) return;
            if ( ! name ) {
                this.listeners = [];
                return;
            }

            var listener;

            for ( var i = 0, length = this.listeners.length; i < length; i++ ) {
                listener = this.listeners[ i ];

                if ( ( ! callback && listener.name === name ) ||
                     ( listener.name === name && callback && listener.callback === callback ) ) {
                    this.listeners.splice( i, 1 );
                    i--;
                    length--;
                }
            }
        },

        dispatch: function( name ) {
            if ( ! this.listeners ) return;

            var listener;
            var args = Array.prototype.slice.call( arguments, 1 );

            for ( var i = 0, length = this.listeners.length; i < length; i++ ) {
                listener = this.listeners[ i ];

                if ( listener.name === name ) {
                    listener.callback.apply( listener.context, args );
                }
            }
        },

        hasListener: function( name, callback, context ) {
            if ( ! this.listeners ) return false;

            var listener;

            for ( var i = 0, length = this.listeners.length; i < length; i++ ) {
                listener = this.listeners[ i ];
                if ( name === listener.name && ! callback ) return true;
                if ( name === listener.name && listener.callback === callback ) {
                    if ( ! context || context === listener.context ) return true;
                }
            }

            return false;
        }

    };

    function dispatcher() {
        return createObject( proto );
    }

    dispatcher.proto = proto;

    return dispatcher;

} );