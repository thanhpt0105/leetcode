
//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (!head) return null;
    let prev = null;
    let curr = head;
    while (left > 1) {
        prev = curr;
        curr = curr.next;
        left--;
        right--;
    }
    let reverseTail = curr;
    let second = curr.next;
    let temp = null;
    while (right > 1) {
        temp = second.next;
        second.next = curr;
        curr = second;
        second = temp;
        right--;
    }
    reverseTail.next = second;
    if (prev != null) {
        prev.next = curr;
    } else {
        head = curr;
    }   
    return head;
};

let head = new ListNode(3, new ListNode(5,null));


console.log(reverseBetween(head, 1, 2));