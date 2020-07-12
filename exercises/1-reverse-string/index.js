/**
 * Pretty simple, write a function called reverseString that returns its input, reversed!
 *
 *@param {string} string will reverse
 *@return {string} reversed
 *
 *@example
 *
 * reverseString('hello there') // returns 'ereht olleh'
 *
 */
const reverseString = (string) => {

    if (string ===''){
        return '';
    }
	let splitString = string.split('').reverse();

	return splitString.reduce((total, currentValue) => total + currentValue);
};

module.exports = reverseString;
