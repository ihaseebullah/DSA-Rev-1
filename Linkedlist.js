class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        let newNode = new Node(value);
        let iterator = this.head;
        while (iterator.next != null) {
            iterator = iterator.next;
        }
        iterator.next = newNode;
        this.tail = iterator;
        this.length++;
    }

    pop() {
        let currentNode = this.head;
        let prevNode = currentNode;
        while (currentNode.next != null) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
    }

    getLatest() {
        return this.tail.value;
    }
    getEarliest() {
        return this.head.value;
    }
    shift() {
        this.head = this.head.next;
        this.length--;
    }
    prot() {
        let iterator = this.head;
        while (iterator.next != null) {
            console.log(iterator.value);
            iterator = iterator.next;
        }
    }

    unshift(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    set(index, value) {
        let iterator = this.head;
        for (let i = 0; i < index; i++) {
            iterator = iterator.next;
        }
        iterator.value = value;
        return "Omaiko aww "
    }

    get(index) {
        let iterator = this.head;
        for (let i = 0; i < index; i++) {
            iterator = iterator.next;
        }
        return iterator.value;
    }

    remove(index) {
        let iterator = this.head;
        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = iterator; iterator = iterator.next;
        }
        prev.next = iterator.next;
        this.length--;
    }

    reverse() {
        let left = this.head;
        let right = left.next;
        this.tail = this.head;
        while (right) {
            let temp = right.next;
            right.next = left;
            left = right;
            right = temp;
        }
        this.head.next = null;
        this.head = left;
    }
    manzanai(){
        const l=(this.length)/2;
        let iterator=this.head;
        for(let i=0;i<(l-1);i++){
            iterator=iterator.next
        }
        return iterator.value
    }
}

const myLinkedList = new LinkedList(0);

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
// myLinkedList.reverse();
// myLinkedList.reverse();
myLinkedList.prot()
console.log(myLinkedList.manzanai())
// console.log(myLinkedList.set(1, 5))
// console.log(myLinkedList.remove(1))
// console.log(myLinkedList.get(1))

// console.log(myLinkedList.length);
// console.log(myLinkedList.getEarliest());
// myLinkedList.prot()
// myLinkedList.pop();
// myLinkedList.shift()
// myLinkedList.prot()
// console.log(myLinkedList.getEarliest());

