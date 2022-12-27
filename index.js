/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!(head))
        return null;
    let node = isCyclic(head);
    if (!node)
        return null;
    
};

function isCyclic(head) {
    try {
        let slow = head.next, fast = head.next.next;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    } catch (error) {
        return null;
    }
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

(function (arr) {
    let head = new ListNode(arr[0]);
    let foo = head;
    for (let i = 1; i < arr.length; i++) {
        foo.next = new ListNode(arr[i]);
        foo = foo.next;
    }
    head = removeNthFromEnd(head);
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res.join(" -> "));
})([1, 2, 3, 4, 5]);