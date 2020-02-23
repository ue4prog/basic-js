class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
      }
      encrypt(message, key) {
        if (!message || !key) {
            throw Error();
        }
        const messageLetters = message;
        console.log(messageLetters);
        let keyFull =  key.repeat(messageLetters.length/key.length) + key.substring(0, messageLetters.length % key.length)
        let messageArr = message.toUpperCase().split('').map(el => {
            if (!this.alphabet.includes(el)){
                return el ;
            }
            return this.alphabet.indexOf(el);
        });
        let keyFullArr = keyFull.toUpperCase().split('').map(el => {
            return this.alphabet.indexOf(el)
        })
        const resultArr = [];
        let j = 0;
        for (let i = 0; i < messageArr.length; i++, j++) {
            let el = messageArr[i];
            if (el === " " || isNaN(el)) {
                resultArr.push(el);
                j--;
                continue;
            }
            resultArr.push(this.alphabet[el] ? (el + keyFullArr[j]) % 26 : el)
        }
        resultArr.filter(elem => elem !== null);
        let result = resultArr.map(el =>{
            return this.alphabet[el] ? this.alphabet[el] : el;
        })
        return result.join('');
    }  

    decrypt(message,key) {
        if (!message || !key) throw Error();

    }
}

module.exports = VigenereCipheringMachine;


this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXY'.split('')
function encrypt(message,key) {
        if (!message || !key) throw Error();
        let keyFull =  key.repeat(message.length/key.length) + key.substring(0, message.length % key.length)
        let messageArr = message.toUpperCase().split('').filter( el => {
            if (!this.alphabet.includes(el)){
                return false ;
            }
            return true;
        }).map(el => {return this.alphabet.indexOf(el)});
        let keyFullArr = keyFull.toUpperCase().split('').map(el => {
            return this.alphabet.indexOf(el)
        })
        let resultArr = messageArr.map((el, index) =>{
            return (el + keyFullArr[index]) % 26; 
        })
        let result = resultArr.map(el =>{
            return this.alphabet[el]
        })
        return result.join('');
    } 