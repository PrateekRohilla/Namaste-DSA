//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

//brute - count approach | TC - O(n) + O(len) | SC - O(1)
var removeNthFromEnd = function(head, n) {
    
    let count = 0;
    let temp = head;

    while(temp){
        count++;
        temp = temp.next;
    }

    if(n == count){
        let newHead = head.next
        return newHead;
    }

    let res = count-n;
    temp = head;

    while(temp){
        res--;
        
        if(res == 0)
            break;

        temp = temp.next;
    }

    if(temp.next)
        temp.next = temp.next.next;
    else
        temp.next = null;

    return head;
};


//optimal - TC O(n) | SC - O(1)
var removeNthFromEnd = function(head, n) {
    
    let slow = head;
    let fast = head;

    for(let i=0;i<n;i++)
        fast = fast.next;

    //edge case - if n is max(equal to length)
    if(fast == null)
        return head.next;

    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};