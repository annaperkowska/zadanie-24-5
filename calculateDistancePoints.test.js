const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	it('checks value for skyFlying, kPoint 200, distance over kPoint', () => {
		const actual = calculateDistancePoints('skyFlying', 227.5, 200);
		const expected = 153;

		assert.equal(actual, expected);
	});
	it('checks value for normal, kPoint 98, distance under kPoint', () => {
		const actual = calculateDistancePoints('normal', 95, 98);
		const expected = 54;

		assert.equal(actual, expected);
	});
	it('checks value for large, kPoint 120, distance=kPoint', () => {
		const actual = calculateDistancePoints('large', 120, 120);
		const expected = 60;

		assert.equal(actual, expected);
	});
	it('checks value for distance with decimals', () => {
		const actual = calculateDistancePoints('large', 130.1, 120);
		const expected = 78;

		assert.equal(actual, expected);
	});
})
