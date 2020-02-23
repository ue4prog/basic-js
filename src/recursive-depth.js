module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        return arr.filter(el => Array.isArray(el)).length ? this.calculateDepth(arr.filter(el => Array.isArray(el)).flat(1), ++depth) : depth;
    }
};
