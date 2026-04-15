//https://leetcode.com/problems/remove-linked-list-elements/

//my noob code - more lines to handle edge cases
var removeElements = function(head, val) {
    
    if(head == null)
        return null;

    if(head.next == null && head.val == val)
        return null;

    if(head.next == null)
        return head;

    //edge case - if head itself is target value
    while(head.val == val && head.next != null)
        head = head.next;

    let temp = head;
    while(temp.next != null){
        if(temp.next.val == val){

            if(temp.next.next != null)
                temp.next = temp.next.next;
            else
                temp.next = null;
        }

        if(temp.next != null && temp.next.val != val)
            temp = temp.next;
    }

    if(head.val == val)
    return null;

    return head;
};


//dummy node concept - edge case covered
var removeElements = function(head, val) {

    let dummy = new ListNode(0, head);
    let temp = dummy;

    while (temp) {
        while (temp.next && temp.next.val === val) {
            temp.next = temp.next.next;
        }
        temp = temp.next;
    }

    return dummy.next;  
};