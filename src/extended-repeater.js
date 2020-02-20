module.exports = function repeater(str, options) {
    options.addition = options.addition === undefined ? '' : options.addition;
    options.additionSeparator = options.additionSeparator === undefined ? '' : options.additionSeparator;
    options.separator = options.separator === undefined ? '+' : options.separator;
    options.repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
    options.additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

    let additionResult = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
    additionResult =  additionResult.substring(0, additionResult.length - options.additionSeparator.length)
    let result = (str + additionResult + options.separator).repeat(options.repeatTimes)
    return result.substring(0, result.length- options.separator.length)
}  
    