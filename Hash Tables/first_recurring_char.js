// given an array tell us the first recurring character

// Naive approach 
function firstRecurringChar(input) {
	// body...
	for (let i =0; i<input.length; i++) {
		for (let j = i+1; j<input.length; j++) {
			if (input[i] === input[j]) {
				return input[i]
			}
		}
	}
	return undefined
} // O(n^2)

// Better solution using hash table
function firstRecurringChar2(input) {
	let hashMap = {}
	for (let i =0; i<input.length; i++) {
		if (hashMap[input[i]] !== undefined) {
			return input[i]
		}
		else {
			hashMap[input[i]] = i
		}
		return undefined
	} // O(n)
} 

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4]))