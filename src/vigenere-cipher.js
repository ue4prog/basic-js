class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabetLength = 26;
        this.alphabetToPosition = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => [letter, index]));
        this.positionToAlphabet = new Map(Array.from(this.alphabetToPosition).map(el => [el[1], el[0]]));
    }

    /**
     * c = (m(j) + k(j)) % n
     * @param {string} message 
     * @param {string} key 
     * @returns {string} encoded string
     */
    encrypt(message, key) {
        if (!message || !key) {
            throw Error();
        }
        const formattedMessage = message.toUpperCase();
        let encoded = '';
        const resolvedKey = this.resolveKey(formattedMessage, key);
        for (let i = 0; i < formattedMessage.length; i++) {
            if (this.alphabetToPosition.has(formattedMessage[i])) {
                const letterPosition =
                    (this.alphabetToPosition.get(formattedMessage[i]) + this.alphabetToPosition.get(resolvedKey[i]))
                    % this.alphabetLength;
                encoded += this.positionToAlphabet.get(letterPosition)
            } else {
                encoded += formattedMessage[i]
            }
        }
        return this.direct ? encoded : encoded.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key) throw Error();
        const formattedMessage = message.toUpperCase();
        let decoded = '';
        const resolvedKey = this.resolveKey(formattedMessage, key);
        for (let i = 0; i < formattedMessage.length; i++) {
            if (this.alphabetToPosition.has(formattedMessage[i])) {
                const letterPosition =
                    (this.alphabetToPosition.get(formattedMessage[i]) - this.alphabetToPosition.get(resolvedKey[i]) + this.alphabetLength)
                    % this.alphabetLength;
                decoded += this.positionToAlphabet.get(letterPosition)
            } else {
                decoded += formattedMessage[i]
            }
        }
        return this.direct ? decoded : decoded.split('').reverse().join('');
    }

    /**
     * @param {string} message always upper case
     * @param {string} key always upper case
     * @returns {string} resolved key
     */
    resolveKey(message, key) {
        let resolvedKey = '';
        let i = 0, j = 0;
        for (i; i < message.length; i++) {
            if (this.alphabetToPosition.has(message[i])) {
                resolvedKey += key[j] ? key[j] : this.resolveStringLength(j, key);
            } else {
                resolvedKey += ' ';
                --j;
            }
            j++
        }
        return resolvedKey.toUpperCase();
    }

    /**
     * @param {number} index index to resolve
     * @param {string} string
     * @returns {string} char at resolved index
     */
    resolveStringLength(index, string) {
        return string[index] ? string[index] : this.resolveStringLength(index - string.length, string);
    }
}

module.exports = VigenereCipheringMachine;
