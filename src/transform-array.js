function removePrevCB (newArray) {
    newArray.pop();
    return [...newArray];
}

function doublePrevCB (newArray, oldArray, currentIndex) {
    return [...newArray, oldArray[currentIndex -1]];
}

function removeNextCB (newArray, _,currentIndex, currentArray) {
    currentArray[currentIndex + 1] = undefined;
    return [...newArray];
}

function doubleNextCB (newArray, oldArray,currentIndex) {
    return [...newArray, oldArray[currentIndex + 1]];
}

const commandsMap = new Map([
    ['--discard-next', removeNextCB],
    ['--discard-prev', removePrevCB],
    ['--double-next', doubleNextCB],
    ['--double-prev', doublePrevCB],
]);

function transform(arr) {
    if (!Array.isArray(arr)){
        throw(new Error('fuck'));
    }
    const oldArray = [...arr];
    return arr.reduce((transformed, element, index) => {
        debugger;
        return (commandsMap.get(element) ? commandsMap.get(element)(transformed, oldArray, index, arr) : [...transformed, element])
            .filter(el => el !== undefined);
    }, [])
}

module.exports = transform;
