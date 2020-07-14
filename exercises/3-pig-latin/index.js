/**
 *Pig Latin is a made-up children's language that's intended to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.


 * @param {string} word be manipulate as Pig latin rules
 * @return {string} changed word into Pig Latin rules
 * 
 * @example 
 * s = translate("apple"); //appleay
 * s = translate("banana"); //ananabay
 */
const translate = (word) => {
	// put words in  array
	let placeWordsInArray = word.split(' ');

	let translatedWord = [];
	//check character is vowel or consonant
	const checkVowelConsonant = (value, index) => {
		return Boolean(value[index].match(/[aeiou]/gi));
	};
	// loop over words
	for (let item of placeWordsInArray) {
		let checkVowel = checkVowelConsonant(item, 0);
		// first character is vowel
		if (checkVowel) {
			translatedWord.push(item + 'ay');
		} // for consonant character
		else {
			let slicedWord = '';
			for (let i = 0; i < item.length; i++) {
				if (checkVowelConsonant(item, i) === false) {
					slicedWord += item.slice(i, i + 1);
				} else {
					// translate word
					// edge case
					let edgeCase = item[i - 1] + item[i];
					if (edgeCase === 'qu') {
						slicedWord += item[i];
						translatedWord.push(item.slice(i + 1, item.length) + slicedWord + 'ay');
						break;
					}
					let newConsonantWord = item.slice(i, item.length);
					translatedWord.push(newConsonantWord + slicedWord + 'ay');
					break;
				}
			}
		}
	}
	return translatedWord.join(' ');
};

module.exports = translate;
