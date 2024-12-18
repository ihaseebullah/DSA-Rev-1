class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let firstNode = new Node(value);
        this.first = firstNode;
    }

    shift(value) {
        let newNode = new Node(value);
        this.top = newNode;
    }
}


let myStack = new Stack(1);
