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

    swap() {
        let head = this.head.value;
        let tail = this.tail.value;
        this.head.value = tail;
        this.tail.value = head;
    }

    rewuse() {
        let iterator = this.tail;
        let totall = ""
        while (iterator) {
            // console.log(iterator.value)
            totall = totall.concat(iterator.value)
            iterator = iterator.prev;
        }
        return totall;
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
    sada() {
        let totall = ""
        let iterator = this.head;
        while (iterator) {
            totall = totall.concat(`${iterator.value}`)
            // console.log(`${iterator.value}`)
            iterator = iterator.next;
        }
        return totall;
    }

    // palindrome(){

    // }
}


const myDoublyLinkedList = new DLL("H")

myDoublyLinkedList.dannasha("A")
myDoublyLinkedList.dannasha("T")
// myDoublyLinkedList.dannasha(4)

// myDoublyLinkedList.rewuse()
// myDoublyLinkedList.display()
// myDoublyLinkedList.insert(9, 2)
// myDoublyLinkedList.insert(9, 4)
// myDoublyLinkedList.swap()
// myDoublyLinkedList.display()

function palindromeChecker() {
    // console.log(myDoublyLinkedList.rewuse())
    // console.log(myDoublyLinkedList.sada())
    if (myDoublyLinkedList.rewuse() == myDoublyLinkedList.sada()) {
        console.log("Perfect palindrome")
        return true;
    }
    console.log("Non palindrome")
    return false;
}

palindromeChecker()
