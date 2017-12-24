const sorting = require('../../utils/sorting');
const expect = require('chai').expect;
// const assert = require('assert');

describe('sorting', () => {
  describe('base sort', () => {
    it('sorts strings', () => {
      var result = [2, 3, 1].sort(sorting.sort);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });
});