/**
 * 
 * https://leetcode-cn.com/problem-list/2cktkvj/
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 19. 删除链表的倒数第 N 个结点
 * 
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？


 * 
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

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
    console.log(i, currentP1.val, currentP2.val);
    if (i === n) {
      // console.log(n, currentP1.val, currentP2.val)
      // console.log(1111)
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

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
  let i = 0;
  const noop = {
    next: null,
  };
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let currentP1 = dummyHead;
  let currentP2 = dummyHead;
  while (currentP1) {
    console.log(i, currentP1.val);
    if (i < n + 1) {
      //
    } else {
      currentP2 = currentP2.next;
    }
    i++;
    currentP1 = currentP1.next;
  }
  currentP2.next = ((currentP2 || noop).next || noop).next;
  return dummyHead.next;
};

function createNodeList(arr) {
  let head = null;
  let tail = null;
  const n = arr.length;
  for (let index = 0; index < n; index++) {
    if (index === 0) {
      head = new ListNode(arr[index]);
      tail = head;
    } else {
      const temp = new ListNode(arr[index]);
      tail.next = temp;
      tail = temp;
    }
  }
  return head;
}

console.log(JSON.stringify(removeNthFromEnd2(createNodeList([1,2,3,4]), 2), null, 2));
