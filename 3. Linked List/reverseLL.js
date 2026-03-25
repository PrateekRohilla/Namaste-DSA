//https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if(head == null || head.next == null)
        return head;

    let curr = head;
    let prev = null;
    let forward = null;

    while(curr){
        forward = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forward;
    }

    return prev;
};