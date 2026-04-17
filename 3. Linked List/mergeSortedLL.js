//https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null)
        return list2;
    
    if(list2 == null)
        return list1;

    let t1 = list1;
    let t2 = list2;

    let dNode = new ListNode(-1,null);
    let temp = dNode;

    while(t1 != null && t2 != null){
        if(t1.val < t2.val){
            temp.next = t1;
            temp = t1;
            t1 = t1.next;
        }
        else{
            temp.next = t2;
            temp = t2;
            t2 = t2.next;
        }
    }

    if(t1)
        temp.next = t1;
    else
        temp.next = t2;


    return dNode.next;
};