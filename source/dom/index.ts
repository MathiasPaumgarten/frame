import { indexOf } from "lodash";

export function index( node: Element ): number {
    if ( ! node.parentNode ) {
        return -1;
    }

    // @ts-ignore
    return indexOf(node.parentNode.children, node);
}
