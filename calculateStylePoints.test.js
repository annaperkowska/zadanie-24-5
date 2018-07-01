const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	it('checks array with the same values', () => {
		const actual = calculateStylePoints([5,5,5,5,5]);
		const expected = 15;

		assert.equal(actual, expected);
	});
	it('checks array with different values', () => {
		const actual = calculateStylePoints([1,2,3,4,5]);
		const expected = 9;

		assert.equal(actual, expected);
	});
	it('checks array with more than 5 values', () => {
		const actual = calculateStylePoints([1,2,3,4,5,6,7]);
		const expected = 20;

		assert.equal(actual, expected);
	});
	it('checks array with values with commas', () => {
		const actual = calculateStylePoints([1.5,2.5,0.5,3.5,4.5]);
		const expected = 7.5;

		assert.equal(actual, expected);
	});
	


})
