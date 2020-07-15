const array = ['a', 'b', 'c', 'd'];

// Adding a new element to the array
array.push('e'); // O(1)
console.log('Modified Array (Insertion) -> ', array);

// Remove the last element from the array
array.pop(); //O(1)
console.log('Modified Array (Deletion at last) -> ', array);

// Adding a element at the beginning of array
array.unshift('x'); //O(n) 
console.log('Modified Array (Insertion at start)-> ', array);

// Adding a element at the middle of the array
array.splice(2, 0, 'Alice'); //O(n/2) or O(n)
console.log('Modified Array (Insertion at middle)-> ', array);

// Removing an element from middle
array.splice(2, 2, 'Alice'); //O(n/2) or O(n)
console.log('Modified Array (Deletion at middle)-> ', array);