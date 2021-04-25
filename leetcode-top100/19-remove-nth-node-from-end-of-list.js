/**
 * 
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？


 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let i = -1;
  const noop = {
    next: null,
  };
  const dummyHead = new ListNode(); // 增加一个dummyHead 简化操作
  dummyHead.next = head;
  let currentP1 = dummyHead;
  let currentP2 = dummyHead;
  while (currentP1) {
    if (i === n) {
      currentP2 = currentP2.next;
    }
    if (i !== n) {
      i++;
    }
    currentP1 = currentP1.next;
  }
  currentP2.next = ((currentP2 || noop).next || noop).next;
  return dummyHead.next;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
