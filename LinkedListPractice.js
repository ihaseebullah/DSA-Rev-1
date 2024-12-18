//Linked List reverse Check

reverse(){
    let left=this.head;
    let right=left.next;
    this.tail=this.head;
    while(right){
        let temp=right.next;
        right.next=left;
        left=right;
        right=temp;
    }
    this.head.next=null;
    this.head=left;
}