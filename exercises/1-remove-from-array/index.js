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

// Spread syntax (...) take restParam and covert to a literal Array
const removeFromArray = (arr, ...restParam) => {
	let changedArray = [];
	// with forEach method go over each element of array
	arr.forEach((element) => {
		// with includes method check elements  whether in restParam array or not then result is boolean
		if (!restParam.includes(element)) {
			// push element is not in the restParam
			changedArray.push(element);
		}
	});
	return changedArray;
};

module.exports = removeFromArray;
