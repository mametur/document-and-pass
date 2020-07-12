/**
 *
 * Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
 *
 * @param {number} start is a integer number
 * @param {number} end is a integer number
 * @return {number} sum of the all integers
 *
 * @example
 *
 * sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
 */
const sumAll = (start, end) => {
	if (Number.isInteger(start) && Number.isInteger(end) && (start >= 0) & (end >= 0)) {
		let findTotalNumber = start - end >= 0 ? start - end : end - start;
		let starter = start >= end ? end : start;

		let myNewArray = Array.from({ length: findTotalNumber + 1 }).map((element, index) => starter + index);

		return myNewArray.reduce((total, currentValue) => (total += currentValue));
	} else {
		return 'ERROR';
	}
};

module.exports = sumAll;
