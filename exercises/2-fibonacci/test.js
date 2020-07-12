const fibonacci = (param) => {
	// check it is Number
	let checkNumber = Number(param);
	// if it is NaN and small then 0 give an error
	if (Number.isNaN(checkNumber) || checkNumber < 0) {
		return 'OOPS';
	}
	// zero and first index are number 1 ever
	let zeroIndex = 1;
	let firstIndex = 1;
	// initial array
	let initialArray = [zeroIndex, firstIndex];

	let starter = 2;
	for (let i = starter; i <= checkNumber - 1; i++) {
		let sum = initialArray[i - 1] + initialArray[i - 2];
		initialArray.push(sum);
	}

	return initialArray[checkNumber - 1];
};
