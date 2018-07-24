"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bezier {
    constructor() {
        this.x = 0;
        this.y = 0;
        this._t = 0;
        this.anchors = [];
    }
    get t() { return this._t; }
    set t(value) {
        if (value === this._t)
            return;
        this._t = value;
        this.update();
    }
    addAnchor(anchor) {
        this.anchors.push({ x: anchor.x, y: anchor.y });
    }
    get() {
        return { x: this.x, y: this.y };
    }
    update() {
        const t = this.t;
        const anchors = this.anchors;
        const length = anchors.length;
        const points = [];
        let i;
        let j;
        for (i = 0; i < length; i++) {
            points[i] = { x: anchors[i].x, y: anchors[i].y };
        }
        for (j = 1; j < length; ++j) {
            for (i = 0; i < length - j; ++i) {
                points[i].x = (1 - t) * points[i].x + t * points[~~(i + 1)].x;
                points[i].y = (1 - t) * points[i].y + t * points[~~(i + 1)].y;
            }
        }
        this.x = points[0].x;
        this.y = points[0].y;
    }
}
exports.Bezier = Bezier;
