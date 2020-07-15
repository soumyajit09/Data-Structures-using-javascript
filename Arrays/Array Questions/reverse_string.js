/* 
Create a function to reverse a string, i.e 'Hi my name is Soumyajit' should be written as 
'tijaymuoS si eman ym iH'.
*/
function reverse_string(str) {
	// check input
	if (!str  || str.length < 2 || typeof str !== 'string') {
			return 'You need to enter a string atleast of 2 words.';
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	// console.log(backwards);
	return backwards.join('')
}


// Another way 
function reverse_string2(str) {
	// body...
	return str.split('').reverse().join('')
}


// Another Way
const reverse_string3 = str => str.split('').reverse().join('');

console.log('With Code               : ', reverse_string('Hi my name is Soumyajit'))
console.log('With Built-in functions : ', reverse_string2('Hi my name is Soumyajit'))
console.log('With ESMA Script        : ', reverse_string3('Hi my name is Soumyajit'))