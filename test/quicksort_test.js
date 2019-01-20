const assert = require('chai').assert
const quickSort = require('../quicksort')

describe('quickSort', function () {
  it('can sort', function () {
    unsorted = [5, 4, 3, 1, 2];
    assert.deepEqual(quickSort(unsorted), [1, 2, 3, 4, 5]);
  });
});