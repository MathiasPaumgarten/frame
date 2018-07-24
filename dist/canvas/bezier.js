"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bezier(context, points) {
    let a;
    let b;
    let i;
    let x;
    let y;
    for (i = 1, length = points.length - 2; i < length; i++) {
        a = points[i];
        b = points[i + 1];
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;
        context.quadraticCurveTo(a.x, a.y, x, y);
    }
    a = points[i];
    b = points[i + 1];
    context.quadraticCurveTo(a.x, a.y, b.x, b.y);
}
exports.bezier = bezier;
