class Node {
    constructor(value) {
        this.value = value;
        this.last = null;
    }
}

class Queue {
    constructor(value) {
        let first = new Node(value);
        first.last = null;
        this.first = first;
        this.last = first;
    }

    enque(value) {
        let newNode = new Node(value);
        this.last.last=newNode;
        this.last = newNode;
        newNode.last = null;
    }

    pop() {
        let first = this.first.value;
        this.first = this.first.last;
        return first;
    }

    view() {
        let iterator = this.first
        while (iterator.last) {
            console.log(iterator.last.value)
            iterator = iterator.last
        }
    }
}

let queue = new Queue(0);
queue.enque(1)
queue.enque(2)
queue.enque(3)
queue.enque(4)
queue.enque(5)


queue.pop()
queue.pop()
queue.pop()
queue.pop()

queue.view()
