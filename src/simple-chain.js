const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {

    return this
  },

  removeLink(position) {
    return this
  },

  reverseChain() {
    this.result.reverse();
    return this
  },

  finishChain() {
    return this.result.join('')
  }
};

module.exports = chainMaker;
