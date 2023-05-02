import no_shirt from "./shared/no_shirt";
function arrayRange(start, stop, step) {
    return Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
}

function findValidImage(shirt, color = '', side = 'front') {
    // if color is not assigned, assign it to its first color
    if (!color) {
        color = Object.keys(shirt.colors)[0]
    }
    // if there is error in data structure
    if (!color || !shirt['colors'][color] || !shirt['colors'][color][side]) {
        return no_shirt.default.front
    }
    return shirt['colors'][color][side]
}

export { arrayRange, findValidImage }