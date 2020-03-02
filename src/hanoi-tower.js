module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    return {
        seconds: (2 ** disksNumber) / (turnsSpeed / 3600),
        turns: 2 ** disksNumber
    }
}