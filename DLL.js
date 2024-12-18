class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }

    display() {
        let iterator = this.head;
        while (iterator) {
            console.log(iterator.value)
            iterator = iterator.next
        }
    }
    dannasha(value) {
        let pacha = new Node(value);
        let iterator = this.head;
        while (iterator.next) {
            iterator = iterator.next;
        }
        iterator.next = pacha;
        pacha.prev = iterator;
        this.tail = pacha;
        this.length++;
    }

    swap(){
       let head=this.head.value;
       let tail=this.tail.value;
       this.head.value=tail;
       this.tail.value=head;
    }

    rewuse() {
        let iterator = this.tail;
        while (iterator) {
            console.log(iterator.value)
            iterator = iterator.prev;
        }
    }
    insert(value, index) {
        let newNode = new Node(value);
        let iterator = this.head;
        for (let i = 0; i < (index - 1); i++) {
            iterator = iterator.next;
        }
        newNode.prev = iterator;
        newNode.next = iterator.next;
        iterator.next = newNode;
        this.length++;
    }
}


const myDoublyLinkedList = new DLL(1)

myDoublyLinkedList.dannasha(2)
myDoublyLinkedList.dannasha(3)
myDoublyLinkedList.dannasha(4)

// myDoublyLinkedList.rewuse()
// myDoublyLinkedList.display()
myDoublyLinkedList.insert(9, 2)
myDoublyLinkedList.insert(9, 4)
myDoublyLinkedList.swap()
myDoublyLinkedList.display()
