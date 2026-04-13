//https://leetcode.com/problems/intersection-of-two-linked-lists/

/*
better approach - searching with hashing
time - O(n)
space - O(n)
*/
/*
function intersectionPresent(head1, head2) {
    let st = new Set();  // Set to store visited nodes from the first list
    while (head1) {
        st.add(head1);  // Add nodes of the first list to the set
        head1 = head1.next;
    }
    while (head2) {
        if (st.has(head2)) {
            return head2;  // If node is found in set, it's the intersection point
        }
        head2 = head2.next;
    }
    return null;  // Return null if no intersection is found
}
*/



/*
optimal - make lists length equal & start comparing to find intersection
TC - O(n)
SC - O(1)
*/
var getIntersectionNode = function(headA, headB) {
    
    let t1 = headA;
    let t2 = headB;

    //find len of both lists
    let n1 = 0, n2 = 0;
    while(t1 || t2){
        if(t1){
            n1++;
            t1 = t1.next;
        }
        if(t2){
            n2++;
            t2 = t2.next;
        }
    }

    //diff in length
    let d = n2 - n1;

    //reset pointers
    t1 = headA;
    t2 = headB;

    /*traverse larger list & make both lists pointers at same length*/
    //second list is larger
    if(n1 < n2){
        while(d > 0){
            t2 = t2.next;
            d--;
        }
    }
    //first list larger
    else{
        while(d < 0){
            t1 = t1.next;
            d++;
        }
    }

    //compare & find intersection
    while(t1 && t2){
        if(t1 == t2)
            return t1;
        
        t1 = t1.next;
        t2 = t2.next;
    }

    return null;
};