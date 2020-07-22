class Node {
	constructor(value) {
		this.left = null
		this.right = null
		this.value = value
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	insert(value) {
		const newNode = new Node(value)
		if (this.root === null) {
			this.root = newNode
		}
		else {
			let currentNode = this.root
			while(true) {
				if (value < currentNode.value) {
					// Left
					if (!currentNode.left) {
						currentNode.left = newNode
						return this;
					}
					currentNode = currentNode.left
				}
				else if (value > currentNode.value) {
					// right 
					if (!currentNode.right) {
						currentNode.right = newNode
						return this
					}
					currentNode = currentNode.right
				}
				else {
					console.log('Tree can\'t contain duplicate nodes.')
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) {
			return false
		}
		let currentNode = this.root
		while(currentNode) {
			if (value < currentNode.value) {
				currentNode = currentNode.left
			}
			else if (value > currentNode.value) {
				currentNode = currentNode.right
			}
			else if(currentNode.value === value) {
				return currentNode
			}
		}
		return false
	}
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)
console.log(tree.lookup(9))
console.log(tree.lookup(4))
console.log(tree.lookup(20))
console.log(tree.lookup(1))
console.log(tree.lookup(6))
console.log(tree.lookup(15))
console.log(tree.lookup(170))

// function traverse(node) {
// 		const tree = { value: node.value };
// 		tree.left = node.left === null ? null : traverse(node.left);
// 		tree.right = node.right === null ? null : traverse(node.right);
// 		return tree;
// }