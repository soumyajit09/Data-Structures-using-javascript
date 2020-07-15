class Node {
	constructor(value) {
		this.value = value
		this.previous = null
		this.next = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		}
		this.tail = this.head; // since only one element so first element will also be the last element.
		this.length = 1;
	}

	append(value) {
		// Appending the value to the linked list
		const NewNode = new Node(value)
		NewNode.previous = this.tail
		this.tail.next = NewNode
		this.tail = NewNode
		this.length += 1
	}

	prepend(value){
		const NewNode = new Node(value)
		NewNode.next = this.head
		this.head.previous = NewNode
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
		const follower = lead_node.next
		lead_node.next = NewNode
		NewNode.next = follower
		follower.previous = NewNode;
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
		leader_node = this.traverseToIndex(index - 1)
        unwantedNode = leader_node.next
        holder = unwantedNode.next
        leader_node.next = holder
        holder.prev = leader_node
        this.length -= 1
	}       

	reverse() {
		if (!this.head.next) {
			return this.head
		}
		let first = this.head
		let second = first.next
		this.tail = this.head
		while(second) {
			const temp = second.next
			second.next = first
			first = second
			second = temp
		}
		this.head.next = null
		this.head = first
		return this.printList()
	}                                        
}

const myDoublyLinkedList = new DoublyLinkedList(10) 
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
myDoublyLinkedList.prepend(1)
myDoublyLinkedList.insert(99, 299)
myDoublyLinkedList.insert(0, 59)
myDoublyLinkedList.insert(2, 55)
myDoublyLinkedList.delete(5)
myDoublyLinkedList.printList()
myDoublyLinkedList.reverse()
