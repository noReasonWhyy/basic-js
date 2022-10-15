const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

 const chainMaker = {
  chain: [],
  getLength() {
    this.chain.push(this.chain.length);
    return this;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position == "number" && this.chain.length >= position && position > 0) {
      this.chain.splice((position - 1), 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[0] = `( ${this.chain[0]}`;
    this.chain[this.chain.length - 1] = `${this.chain[this.chain.length - 1]} )`;
    const final = this.chain.map(el => el).join(' )~~( ');
    this.chain = [];
    return final;
  }
};



module.exports = {
  chainMaker
};
