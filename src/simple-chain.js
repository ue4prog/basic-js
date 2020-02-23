const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(''+value);
    return this;
  },

  removeLink(position) {
    if (typeof position == 'number' && position <= this.result.length && position > 0){
      this.result.splice(position - 1, 1);
      return this;
      }
    else {
      this.result = [];
      throw new Error;
    }
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const result = this.result.map(el => {
      return `( ${el} )`;
    })
    this.result = []
    return result.join('~~');
  }
};

module.exports = chainMaker;
