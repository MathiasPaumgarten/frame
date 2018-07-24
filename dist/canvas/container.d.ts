export declare class Container {
    children: Container[];
    parent?: Container;
    append(element: Container): this;
    prepend(element: Container): this;
    insert(element: Container, index: number): void;
    remove(element: Container): void;
    update(): void;
    render(): void;
    private testParent;
}
