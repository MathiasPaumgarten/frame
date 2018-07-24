"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Container {
    constructor() {
        this.children = [];
    }
    append(element) {
        this.testParent(element);
        this.children.push(element);
        element.parent = this;
        return this;
    }
    prepend(element) {
        this.testParent(element);
        this.children.unshift(element);
        element.parent = this;
        return this;
    }
    insert(element, index) {
        this.testParent(element);
        index = lodash_1.clamp(index, 0, this.children.length);
        this.children.splice(index, 0, element);
        element.parent = this;
    }
    remove(element) {
        lodash_1.remove(this.children, element);
        element.parent = undefined;
    }
    update() {
        for (const child of this.children)
            child.update();
    }
    render() {
        for (const child of this.children)
            child.render();
    }
    testParent(element) {
        if (element.parent) {
            throw new Error("The child container is already in the tree.");
        }
    }
}
exports.Container = Container;
