//https://leetcode.com/problems/swap-nodes-in-pairs/

var swapPairs = function(head) {
    
    if(head == null || head.next == null)
        return head;

    let first = head;
    let second = head.next;
    let prev = null;

    while(first != null && second != null){
        let third = second.next;
        second.next = first;
        first.next = third;

        if(prev != null)
            prev.next = second;
        else
            head = second;
        
        //update
        prev = first;
        first = third;
        if(third != null)
            second = third.next;
        else
            second = null;
    }

    return head;
};