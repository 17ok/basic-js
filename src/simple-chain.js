const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value = ' ') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || /* !(Number.isInteger(position)) || */ position > this.chain.length || position < 1)  {
      this.chain.length = 0;
      throw new Error ("You can\'t remove incorrect link!");
    } else {
      const indexPosition = position - 1;
      this.chain.splice(indexPosition, 1);
    return this;

    }
    

  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.join('~~');
    this.chain.length = 0;
    return finish;
}
};

module.exports = {
  chainMaker
};
