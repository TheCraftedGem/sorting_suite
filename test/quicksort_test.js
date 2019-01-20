const assert = require('chai').assert
const quickSort = require('../quicksort')

describe('quickSort', function () {
  it('can sort', function () {
    unsorted = [5, 4, 3, 1, 2];
    assert.deepEqual(quickSort(unsorted), [1, 2, 3, 4, 5]);
  });
});

describe('quickSort', function () {
  it('can sort multiple arrays', function () {
    unsorted = [5, 2, 3, 1, 4];
    assert.deepEqual(quickSort(unsorted), [1, 2, 3, 4, 5]);
  });
});