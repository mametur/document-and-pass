/**
 *Convert phrases and words into snake case
 *Snake case (or snake_case) is the practice of writing compound words or phrases in which the elements are separated with one underscore character (_) and no spaces, with each element's initial letter usually lowercased as in "foo_bar"
 *
 * @param {string} word
 * @return {string} converted to snake case
 *
 * @example
 * snakeCase('Hello, World!') // hello_world
   snakeCase('snakeCase') // snake_case
 *
 */
const snakeCase = function (word) {
	//match(/[a-zA-Z]+/g)
	let letters = /[a-zA-Z]+/g;

	// put words in the array without punctuation
	let wordStore = word.match(letters);

	let selectWord = wordStore[0];
	// check when the array has just one item or word
	if (wordStore.length === 1) {
		if (selectWord !== selectWord.toLowerCase()) {
			// dont check first letter
			for (let i = 1; i < selectWord.length; i++) {
				if (selectWord[i] !== selectWord[i].toLowerCase()) {
					let substring = selectWord.substr(0, i) + '_' + selectWord.substr(i, selectWord.length);
					return substring.toLowerCase();
				}
			}
		}
	}
	return wordStore.join('_').toLowerCase();
};

module.exports = snakeCase;
