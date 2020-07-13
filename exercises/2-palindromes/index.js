/**
 *Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:
 * 
 * @param {string} string is to check for palindrome
 * @return {boolean}  true or false 
 * 
 * @example
 *   palindromes('racecar') // true
palindromes('tacos') // false 
 * 
 */
const palindromes = (string) => {
	let LetterWithoutPunctuation = string
		.match(/[a-zA-Z]+/g)
		.join('')
		.toLowerCase();
	let substring = LetterWithoutPunctuation.toLowerCase().split('');

	// reverse array
	substring.reverse();
	// join letters
	let joinLetter = substring.join('');
	return joinLetter === LetterWithoutPunctuation ? true : false;
};

module.exports = palindromes;
