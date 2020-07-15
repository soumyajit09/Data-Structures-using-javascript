class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head; // since only one element so first element will also be the last element.
		this.length = 1;
	}

	append(value) {
		// Appending the value to the linked list
		const NewNode = new Node(value)
		this.tail.next = NewNode
		this.tail = NewNode
		this.length += 1
	}

	prepend(value){
		const NewNode = new Node(value)
		NewNode.next = this.head
		this.head = NewNode
		this.length += 1
	}

	printList() {
		const array = []
		let currentNode = this.head
		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		console.log(array)
	}

	insert(index, value) {
		// check params
		if (index >= this.length) {
			return this.append(value)
		}
		if (index === 0) {
			return this.prepend(value)
		}
		const NewNode = { 
			value: value,
			next: null
		}
		const lead_node = this.traverse_to_index(index-1)
		const hold_ptr = lead_node.next
		lead_node.next = NewNode
		NewNode.next = hold_ptr
		this.length += 1
	}

	traverse_to_index(index) {
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter += 1
		}	
		return currentNode
	}
	delete(index) {
		const leader =  this.traverse_to_index(index-1)
		const unwantedNode = leader.next
		leader.next = unwantedNode.next
		this.length -= 1
	}                                               
}

const myLinkedList = new LinkedList(10) 
myLinkedList.printList()
myLinkedList.append(5)
myLinkedList.printList()
myLinkedList.append(16)
myLinkedList.printList()
myLinkedList.prepend(1)
myLinkedList.printList()
myLinkedList.insert(99, 299)
myLinkedList.printList()
myLinkedList.insert(0, 59)
myLinkedList.printList()
myLinkedList.insert(2, 55)
myLinkedList.printList()
myLinkedList.delete(5)
myLinkedList.printList