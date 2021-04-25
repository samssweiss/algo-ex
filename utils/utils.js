function createNodeList(arr) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  const head = null
  const tail = null
  
  const n = arr.length
  for (let index = 0; index < n; index++) {
    if (index === 0) {
      head = new ListNode(val)
      tail = head
    } else {
      const temp = new ListNode(val)
      tail.next = temp
      tail = temp
    }
  }
  
  return head
}
