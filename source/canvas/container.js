define( [

    "mout/function/func",
    "mout/lang/createObject",
    "mout/array/remove",
    "mout/math/clamp"

], function( func, createObject, remove, clamp ) {

    var proto = {

        parent: null,

        append: function( element ) {
            if ( ! this.children ) this.children = [];

            this.children.push( element );
            element.parent = this;
        },

        prepend: function( element ) {
            if ( ! this.children ) this.children = [];

            this.children.unshift( element );
            element.parent = this;
        },

        insert: function( element, index ) {
            if ( ! this.children ) this.children = [];

            index = clamp( index, 0, this.children.length );

            this.children.splice( index, 0, element );
            element.parent = this;
        },

        remove: function( element ) {
            remove( this.children, element );
            element.parent = null;
        },

        update: function() {
            this.children.forEach( func( "update" ) );
        },

        draw: function() {
            this.children.forEach( func( "draw" ) );
        }

    };

    function container() {
        return createObject( proto );
    }

    container.proto = proto;

    return container;

} );