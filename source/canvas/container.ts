import { clamp, remove } from "lodash";

export class Container {
    public children: Container[] = [];
    public parent?: Container;

    public append( element: Container ): this {
        this.children.push( element );
        return this;
    }

    public prepend( element: Container ): this {
        this.children.unshift( element );
        return this;
    }

    public insert( element: Container, index: number ) {
        index = clamp(index, 0, this.children.length );

        this.children.splice( index, 0, element );
        element.parent = this;
    }

    public remove( element: Container ) {
        remove( this.children, element );
        element.parent = undefined;
    }

    public update() {
        for ( const child of this.children ) child.update();
    }

    public render() {
        for ( const child of this.children ) child.render();
    }
}
