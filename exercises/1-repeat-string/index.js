/**
 *
 *Write a function that simply repeats the string a given number of times:
 *
 *@param {string} string will be repeat
 *@param {number} number shows how many times first parameter will be repeated
 *@returns {string} 'error message, empty string or concatenate the repeated string
 */
const repeatString = (string, number) => {
	let result = '';
	if (number > -1) {
		for (let i = 1; i <= number; i++) {
			result += string;
		}
		return result;
	} else {
		return 'ERROR';
	}
};

module.exports = repeatString;
