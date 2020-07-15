// Implementing stacks using linked Lists
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	peek() {
		// view the topmost element of the stack
		return this.top
	}

	push(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.top = newNode
			this.bottom = newNode
		}
		else {
			const holdingPtr = this.top
			this.top = newNode
			this.top.next = holdingPtr
		}
		this.length += 1
		console.log(this)
	}

	pop() {
		if (!this.top) {
			return null
		}
		if (this.top === this.bottom) {
			this.bottom = null
		}
		const holdingPtr = this.top
		this.top = this.top.next;
		this.length--
		console.log(this)
	}
}

const myStack = new Stack()
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.pop()
myStack.pop()
myStack.pop()