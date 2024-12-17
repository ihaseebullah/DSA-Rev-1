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
    push(value){
        let newNode=new Node(value);
        let iterator=this.head;
        while(iterator.next!=null){
            iterator=iterator.next;
        }
        iterator.next=newNode;
        this.tail=iterator;
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
}

const myLinkedList = new LinkedList(0);

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList.length);

myLinkedList.pop();

console.log(myLinkedList.getLatest());

