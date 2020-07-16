// Implementing queue using linked lists
class Node {
	constructor(value) {
		this.data = value
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	peek() {
		console.log(this.first)
	}

	enqueue(value) {
		const newNode = new Node(value)
		if (this.length === 0) {
			this.first = newNode
			this.last = newNode
		}
		else {
			this.last.next = newNode
			this.last = newNode
		}
		this.length++
		console.log(this)
	}

	dequeue() {
		// check if queue is empty
		if(!this.first) {
			return null
		}
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.length--
		console.log(this)
	}
	isempty() {
		if (this.length === 0) {
			console.log("Queue is empty.")
		}
		else {
			console.log("Queue contain", this.length,"element(s).")
		}
	}
}

const myQueue = new Queue()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Sameer')
myQueue.peek()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.isempty()
// myQueue.peek()
