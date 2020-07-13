/**
 *
 * You are given an array of objects that represent books with an author and a title that looks like this:
 *
 * @param {Array<object>} object is an array include object
 *
 *
 * @example
 *   ```javascript
  const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
] 
 ```
*
* ```javascript
getTheTitles(books) // ['Book','Book2']
```
 */

const getTheTitles = (array) => {
	let initialArray = [];
	for (let item in array) {
		let checkPropertyName = array[item];
		initialArray.push(checkPropertyName.title);
	}
	return initialArray;
};

module.exports = getTheTitles;
