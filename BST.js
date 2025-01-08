class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        let root = this.root;
        if (!this.root) {
            this.root = newNode;
            return;
        }
        if (this.root) {
            goDown(this.root, value)
        }
        function goDown(root, value) {
            if (value < root.value) {
                if (root.left) {
                    goDown(root.left, value);
                } else {
                    root.left = newNode;
                    return;
                }
            } else {
                if (root.right) {
                    goDown(root.right, value);
                } else {
                    root.right = newNode;
                    return;
                }
            }
        }
    }

    search(value) {
        function dive(currentNode, value) {
            if (currentNode === null) {
                console.log("Couldn't find the value " + value);
                return false; // Stop further execution if the node is null
            }
            if (value === currentNode.value) {
                console.log("Found the value " + value);
                return; // Stop further execution once the value is found
            }
            if (value < currentNode.value) {
                // Go left if the value is smaller
                return dive(currentNode.left, value);
            }
            if (value > currentNode.value) {
                // Go right if the value is larger
                return dive(currentNode.right, value);
            }
        }

        return dive(this.root, value);
    }

    max() {
        let currentNode = this.root;
        if (!currentNode) {
            return "Tree is empty"
        }

        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    min(){
        let currentNode = this.root;
        if (!currentNode) {
            return "Tree is empty"
        }

        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

}

let Tree = new BST();

Tree.insert(432)
Tree.insert(312)
Tree.insert(92)
Tree.insert(64)
Tree.insert(13)
Tree.insert(72)
Tree.search(79)
console.log(Tree.max()) // 432
console.log(Tree.min()) // 13