"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cartesianToPolar(point) {
    return {
        distance: Math.sqrt(point.x * point.x + point.y * point.y),
        angle: Math.atan(point.y / point.x),
    };
}
exports.cartesianToPolar = cartesianToPolar;
function polarToCaresian(polar) {
    return {
        x: Math.cos(polar.angle) * polar.distance,
        y: Math.sin(polar.angle) * polar.distance,
    };
}
exports.polarToCaresian = polarToCaresian;
