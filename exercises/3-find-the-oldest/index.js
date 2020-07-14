/**
 *given an array of objects representing people with a birth and death year, return the oldest person.
 *
 *@param {Array<Object>} array  is an array includes some property to check their old
 *@return {string} the oldest person
 *
 * @example
 *
 * const people = [
      {
        name: 'Carly',
        yearOfBirth: 2018,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]  // Ray
 *
 */

let findTheOldest = function (array) {
	let currentYear = new Date().getFullYear();

	let findAges = [];

	findAges = array.map((element) => {
		let object = {};
		object = element;

		if (element.yearOfDeath === undefined) {
			element.yearOfDeath = currentYear;
			return element.yearOfDeath - element.yearOfBirth;
		} else {
			return element.yearOfDeath - element.yearOfBirth;
		}
	});

	let findOldest = 0;
	findOldest = findAges.reduce((first, current) => {
		let check = first > current ? first : current;
		return check;
	});

	let findNamePosition = findAges.indexOf(findOldest);

	return array[findNamePosition];
};

module.exports = findTheOldest;
