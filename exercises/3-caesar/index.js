/**
 *
 * Implement the legendary caesar cipher:
 * In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
 *
 * @param {string} string will change each  character another character
 * @param {number} number increase letter
 * @return {string} the legendary caesar cipher
 *
 *
 */

const caesar = (string, number) => {
	let getCharacter = string.split('');
	let newArray = [];
	getCharacter.forEach((element) => {
		if (/^[a-zA-Z0-9]+$/.test(element)) {
			newArray.push(element.charCodeAt());
		} else {
			newArray.push(element);
		}
	});
	let incrementCharacter = [];
	const backToStartPoint = (number, end, item) => {
		if (number >= 26) {
			number = number % 26;
		}
		return number + item - end - 1;
	};
	const backToLastPoint = (number, item, start, end) => {
		if (number <= -26) {
			number = number % 26;
			if (item + number >= start) {
				return item + number;
			}
		}
		return end + (item - start + number) + 1;
	};
	const findCharacterFromNumber = (item, number) => {
		return String.fromCharCode(item + number);
	};

	incrementCharacter = newArray.map((item) => {
		let capitalLetterEnd = 90,
			capitalLetterStart = 65,
			smallLetterEnd = 122,
			smallLetterStart = 97;

		if (smallLetterStart <= item && item <= smallLetterEnd) {
			if (number < 0 && item >= smallLetterStart) {
				if (item + number < smallLetterStart) {
					return String.fromCharCode(backToLastPoint(number, item, smallLetterStart, smallLetterEnd));
				} else {
					return findCharacterFromNumber(item, number);
				}
			} else if (item + number > smallLetterEnd) {
				return String.fromCharCode(smallLetterStart + backToStartPoint(number, smallLetterEnd, item));
			} else {
				return findCharacterFromNumber(item, number);
			}
		} else if (capitalLetterStart <= item && item <= capitalLetterEnd) {
			if (number < 0 && item <= capitalLetterEnd) {
				if (item + number < capitalLetterStart) {
					return String.fromCharCode(backToLastPoint(number, item, capitalLetterStart, capitalLetterEnd));
				} else {
					return findCharacterFromNumber(item, number);
				}
			} else if (item + number > capitalLetterEnd) {
				return String.fromCharCode(capitalLetterStart + backToStartPoint(number, capitalLetterEnd, item));
			} else {
				return findCharacterFromNumber(item, number);
			}
		} else {
			return item;
		}
	});

	return incrementCharacter.join('');
};
module.exports = caesar;
