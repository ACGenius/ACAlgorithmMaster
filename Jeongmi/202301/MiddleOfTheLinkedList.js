/**
 * 876. Middle of the Linked List
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.
 *  If there are two middle nodes, return the second middle node.
 * 
 *  Example 1:
 *  Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

    Example 2:
    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

    Constraints:
    The number of nodes in the list is in the range [1, 100].
    1 <= Node.val <= 100
*/
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
var middleNode = function (head) {
    // return if it is empty
    if (!head) return head;
    
    let node = head;
    let cnt = 0;

    // loop through all the node and count the number of node
    while(node){
        cnt++;
        node = node.next;
    }
    // get the middle number of the node
    cnt  = parseInt(cnt/2);

    // loop until the middle node
    for(let i= 0;i<cnt;i++){
        head = head.next;
    }
    
    // return middle node.
    return head;
};


/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/
// others solution
var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};