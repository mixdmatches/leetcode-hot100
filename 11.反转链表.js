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
var reverseList = function (head) {
  let arr = [];
  let p = head;
  while (p != null) {
    arr.push(p.val);
    p = p.next;
  }
  let n = head;
  for (let i = arr.length - 1; i >= 0; i--) {
    n.val = arr[i];
    n = n.next;
  }
  return head;
};
