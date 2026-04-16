//https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {
    if(head == null || head.next == null || head.next.next == null)
        return head;

    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    //even is always ahead of odd
    //so all checks should be for even
    while(even != null && even.next != null){

        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};