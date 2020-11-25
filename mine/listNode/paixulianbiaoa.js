// 本解题思路来源 https://leetcode-cn.com/problems/sort-list/solution/jsjie-pai-xu-lian-biao-wen-ti-by-user7746o/
const { ListNode } = require('../../index.js')
let preHead = new ListNode(-1);
console.log('preHead', preHead);

let sortList = function(head) {
  return mergeSortRec(head)
}

// 归并排序
// 若分裂后的两个链表长度不为 1，则继续分裂
// 直到分裂后的链表长度都为 1，
// 然后合并小链表
let mergeSortRec = function (head) {
  console.log('head', head.visualShow());
  if(!head || !head.next) {
      return head
  }

  // 获取中间节点
  let middle = middleNode(head)
  // 分裂成两个链表
  let temp = middle.next
  middle.next = null
  let left = head, right = temp
  // 继续分裂（递归分裂）
  left = mergeSortRec(left)
  right = mergeSortRec(right)
  // 合并两个有序链表
  const mergedList = mergeTwoLists(left, right);
  console.log('mergedList', mergedList.visualShow());
  return mergedList;
}

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

// 合并两个有序链表
let mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1);
  let cur = preHead;
  while(l1 && l2){
      if(l1.val < l2.val){
          cur.next = l1;
          l1 = l1.next;
      }else{
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next;
  }
  cur.next = l1 || l2;
  return preHead.next;
}

const linkmock = ListNode.mock(7);
console.log('linkmock', linkmock.visualShow());

const res = sortList(linkmock);
console.log('res', res);