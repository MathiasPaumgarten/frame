import { clamp, remove } from "lodash";

export class Container {
    children: Container[] = [];
    parent?: Container;

    append( element: Container ): this {
        this.testParent( element );
        this.children.push( element );

        element.parent = this;

        return this;
    }

    prepend( element: Container ): this {
        this.testParent( element );
        this.children.unshift( element );

        element.parent = this;

        return this;
    }

    insert( element: Container, index: number ) {
        this.testParent( element );
        index = clamp(index, 0, this.children.length );

        this.children.splice( index, 0, element );
        element.parent = this;
    }

    remove( element: Container ) {
        remove( this.children, element );
        element.parent = undefined;
    }

    update() {
        for ( const child of this.children ) child.update();
    }

    render() {
        for ( const child of this.children ) child.render();
    }

    private testParent( element: Container ) {
        if ( element.parent ) {
            throw new Error( "The child container is already in the tree." );
        }
    }
}
