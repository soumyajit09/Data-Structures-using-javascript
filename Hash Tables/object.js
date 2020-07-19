let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function () {
		// body...
		console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
	}
}

console.log(user.age) // O(1)
user.spell = 'abracadabra'
console.log(user.spell) // O(1)
user.scream() // O(1)
