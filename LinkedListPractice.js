//Linked List reverse Check

function reverse(){
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
//Middle Guy 

function manzanai(){
    const l=(this.length)/2;
    let iterator=this.head;
    for(let i=0;i<(l-1);i++){
        iterator=iterator.next
    }
    return iterator.value
}