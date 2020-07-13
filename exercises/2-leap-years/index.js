/**
 *Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:
 *
 * @param {number} years should be integer number
 * @return {boolean} true or false 
 *
 *  @example
 * leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
 *
 *
 */
const leapYears = function (years) {
	let convertNumber = Number(years);

	let checkNumberIsInteger = Number.isInteger(convertNumber);
	let result = false;
	if (checkNumberIsInteger) {
		if (!(convertNumber % 100)) {
			if (!(convertNumber % 400)) {
				return true;
			}
			return false;
		} else if (!(convertNumber % 4)) {
			return true;
		}
	}
	return result;
};

module.exports = leapYears;
