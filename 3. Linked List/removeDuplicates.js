//https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

var deleteDuplicates = function(head) {
    
    if(head == null || head.next == null)
        return head;

    let temp = head;

    while(temp != null && temp.next != null){

        if(temp.val == temp.next.val)
            temp.next = temp.next.next;

        if(temp.next != null && temp.val != temp.next.val)
            temp = temp.next;
    }

    return head;
};