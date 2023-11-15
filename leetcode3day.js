/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let prevNode = new ListNode();
    const headNode = prevNode;
    while(l1 || l2 || carry) {
        let val1 = 0;
        let val2 = 0;
        if (l1) {
            val1 = l1.val;
            l1 = l1.next;
        }
    }
};