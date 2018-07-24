"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function index(node) {
    if (!node.parentNode) {
        return -1;
    }
    // @ts-ignore
    return lodash_1.indexOf(node.parentNode.children, node);
}
exports.index = index;
