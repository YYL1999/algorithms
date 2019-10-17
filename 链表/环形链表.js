/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let first = head;
    let second = head;
    while(first && first.next) {
      first = first.next.next;
      second = second.next;
      if (first === second) return true;
    }
    return false;
  };
  