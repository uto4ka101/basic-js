const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {

    if (value === undefined) {
      this.chainArr.push('');
    } else if (value === null) {
      this.chainArr.push('null');
    } else {
      this.chainArr.push(value);
    }
    return this;
  },

  removeLink(position) {

    if (!Number.isInteger(position) || position > this.chainArr.length || position < 1) {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArr.splice((position - 1), 1);
    return this;

  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chainArr;
    this.chainArr = [];
    return "( " + result.join(" )~~( ") + " )";
  }

};

module.exports = {
  chainMaker
};
