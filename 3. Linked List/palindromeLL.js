//https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if(head.next == null)
        return true;

    //1.find middle using slow fast ptr
    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    //2.reverse LL from middle
    let prev = null;

    while(slow){
        let forward = slow.next;
        slow.next = prev;
        prev = slow;
        slow = forward;
    }

    //3.start comparing start & mid
    let ptr1 = head;
    let ptr2 = prev;

    while(ptr2){
        if(ptr1.val != ptr2.val)
            return false;

        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return true;
};