// 找到单链表的重点

// 获取中间节点
// - 如果链表长度为奇数，则返回中间节点
// - 如果链表长度为偶数，则有两个中间节点，这里返回第一个
let middleNode = function(head) {
  let fast = head, slow = head
  while(fast && fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}