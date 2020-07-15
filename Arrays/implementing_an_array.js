class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const last_item = this.data[this.length-1];
		delete this.data[this.length-1]; // this is to removwe the last line (element).
		this.length--;
		return last_item;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}

	shiftItems(index) {
		for (let i = index; i<this.length-1; i++) {
			this.data[i] = this.data[i+1];
		}
		delete this.data[this.length-1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hey');
newArray.push('you');
newArray.push('!');
newArray.push('are');
newArray.push('nice');
// console.log(newArray);
// newArray.pop();
newArray.delete(0);
newArray.delete(1);
console.log(newArray);