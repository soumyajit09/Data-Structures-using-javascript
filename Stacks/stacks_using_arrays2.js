class Stack {
	constructor() {
		this.array = []
	}

	peek() {
		return this.array[this.array.length-1]
	}

	push(value) {
		this.array.push(value)
		return this.array
	}

	stackElements() {
		return this.array
	}

	pop() {
		this.array.pop()
		return this.array
	}

	stackLength() {
		return this.array.length
	}

	isEmpty() {
		if (this.array.length === 0) {
			return "Yes, the Stack is empty"
		}
		else {
			return "No, the Stack is not empty."
		}
	}
}

const myStack = new Stack()
console.log("Is the Stack empty ? -> ", myStack.isEmpty())
myStack.push(0)
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log("Is the Stack empty ? -> ", myStack.isEmpty())
console.log("Stack Elements ->", myStack.stackElements())
console.log("Stack Length -> ", myStack.stackLength())
myStack.pop()
myStack.pop()
console.log("Stack Elements after 'pop()' operation ->", myStack.stackElements())
console.log("Stack Length -> ", myStack.stackLength())
console.log("Is the Stack empty ? -> ", myStack.isEmpty())