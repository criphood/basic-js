const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('( )');
    } else {
      this.arr.push(`( ${value} )`);
    }
    console.log(this.arr)
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' ||
      position < 1 ||
      position > this.arr.length ||
      !Number.isInteger(position)) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr.length = 0;
    console.log(result)
    return result;
  }
};

chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();


module.exports = {
  chainMaker
};
