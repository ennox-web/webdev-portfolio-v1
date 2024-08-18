export function randomRange(min: number, max: number) {
    // return min + Math.random() * (max - min);
    return randI(min, max);
}

export function degreesToRads(degrees: number) {
    return degrees / 180 * Math.PI;
}

export function lineToAngle(x1: number, y1: number, length: number, radians: number) {
    var x2 = x1 + length * Math.cos(radians),
        y2 = y1 + length * Math.sin(radians);
    return { x: x2, y: y2 };
}

export function calculateDensity(width: number, height: number, density: number) {
    return Math.floor((width * height) / density);
}

export function calculateLayerIndex() {
    const chance = randomRange(0, 100);
    let layerIndex = 0;
    if (92 >= chance && chance > 80) {
        layerIndex = 1;
    }
    else if (chance > 92) {
        layerIndex = 2;
    }
    return layerIndex;
}

const randI = (min: number, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;