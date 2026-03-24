//https://leetcode.com/problems/middle-of-the-linked-list/

let Node = function (val){
    this.val = val;
    this.next = null;
}

let LinkedList = function(){
    this.head = null;
    this.size = 0;
}

let newLL = new LinkedList();
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);
let node4 = new Node(40);

newLL.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

let current = newLL.head;

while(current != null){
    console.log(current.val);
    current = current.next;
}


let middleNode = function(head){

    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next;
    }

    return slow.val
}

console.log(middleNode(newLL.head));