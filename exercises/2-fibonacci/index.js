/**
 *
 * Create a function that returns a specific member of the fibonacci sequence:
 *
 *@param {number | string} param cast it then should be number
 *
 *
 * @example
 *fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3) fibonacci(6) // returns 8
 */
const fibonacci = (param) => {
	let checkNumber = Number(param);

	if (Number.isNaN(checkNumber) || checkNumber < 0) {
		return 'OOPS';
	}

	let zeroIndex = 1;
	let firstIndex = 1;

	let initialArray = [zeroIndex, firstIndex];

	let starter = 2;
	for (let i = starter; i <= checkNumber - 1; i++) {
		let sum = initialArray[i - 1] + initialArray[i - 2];
		initialArray.push(sum);
	}

	return initialArray[checkNumber - 1];
};

module.exports = fibonacci;
