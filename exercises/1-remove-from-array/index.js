/**
 *Implement a function that takes an array and some other arguments then removes the other arguments from that array
 *
 * @param {Object[]} arr parameter is array
 * @param {Object[]} restParam is removes from first parameter
 * @return {Object[]} Return values should be array without second parameter values
 *
 *@example
 *
 * const remove = 3;
 * removeFromArray([1, 2, 3, 4], remove); // [1, 2, 4]
 *
 */

const removeFromArray = (arr, ...restParam) => {
	let changedArray = [];

	arr.forEach((element) => {
		if (!restParam.includes(element)) {
			changedArray.push(element);
		}
	});
	return changedArray;
};

module.exports = removeFromArray;
