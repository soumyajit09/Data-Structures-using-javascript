// WAP to implement stack using arrays
class Stacks {
	constructor(value) {
		this.stack = new Array(value)
		this.top = -1
	}

	push(element) {
		// push an element to the stack
		if (this.top !== (this.value-1)) {
			this.stack[++this.top] = element
		}
		else {
			console.log('Stack Overflow')
		}
	}

	pop() {
		// pop the topmost element from the stack
		if (this.top >= 0) {
			let data = this.stack[this.top--]
			return data
		}
		else {
			console.log("Stack Underflow")
		}
	}

	isempty() {
		if (this.top === -1) {
			return "Yes, the Stack is an Empty Stack"
		}
		else {
			return "No, the Stack is not empty, it contains", this.stack.length, "element(s)."
		}
	}

	Stacksize() {
		return this.stack.length
	}

	printStack() {
		return this.stack
	}

	peek() {
		return this.stack[this.stack.length-1]
	}
}

const myStack = new Stacks(5)
myStack.push(0)
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log("Is the Stack empty? : ", myStack.isempty())
console.log("Size of stack : ", myStack.Stacksize())
console.log("topmost element of the Stack : ", myStack.peek())
console.log("Stack elements  : ", myStack.printStack())
