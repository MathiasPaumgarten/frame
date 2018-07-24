"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static subtract(a, b) {
        return a.clone().subtract(b);
    }
    static add(a, b) {
        return a.clone().add(b);
    }
    static interpolate(a, b, percent) {
        const difference = Point.subtract(b, a).multiply(percent);
        return a.clone().add(difference);
    }
    set(x, y) {
        if (typeof x === "number") {
            this.x = x;
            this.y = y || this.y;
        }
        else {
            this.x = x.x;
            this.y = x.y;
        }
        return this;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    subtract(other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    normalize() {
        this.divide(this.length);
        return this;
    }
    clone() {
        return new Point(this.x, this.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
exports.Point = Point;
