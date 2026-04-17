//https://leetcode.com/problems/rotate-list/description/

var rotateRight = function(head, k) {

    if(head == null || head.next == null || k == 0)
        return head;

    let len = 1;
    let tail = head;

    while(tail.next){
        tail = tail.next;
        len++;
    }

    k = k % len;
    if(k == 0)
        return head;

    //making it circular, connecting tail to head
    tail.next = head;

    for(let i=0;i<len-k;i++)
        tail = tail.next;

    //updating new head
    head = tail.next;

    //removing circulation
    tail.next = null;

    return head;
};