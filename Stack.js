class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let firstNode = new Node(value);
        this.top = firstNode;
        firstNode.next = null;
    }

    shift(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    view() {
        let iterator = this.top;
        while (iterator) {
            console.log(iterator.value)
            iterator = iterator.next
        }
    }

    unshift() {
        this.top = this.top.next;
    }
}


let myStack = new Stack(1);
myStack.shift(2);
myStack.shift(3);
myStack.shift(4);
myStack.shift(5);
myStack.shift(6);

myStack.unshift()
myStack.unshift()
myStack.unshift()
myStack.view()