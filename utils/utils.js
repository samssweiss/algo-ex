function createNodeList(arr) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

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
