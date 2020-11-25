const { ListNode } = require('../../index.js')

// 合并两个有序链表
let mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1);
  console.log('最初的preHead', preHead);
  preHead.visualShow();
  let cur = preHead;
  console.log('最初的cur', cur);
  cur.visualShow();
  while(l1 && l2){
    console.log('cur 开始', cur);
    cur.visualShow();
    console.log('l1  开始');
    l1.visualShow();
    console.log('l2 开始');
    l2.visualShow();
      if(l1.val < l2.val){
          // 这里cur.next同时也是preHead.next(不过cur和preHead是不相等的，这是因为后面的cur = cur.next)
          cur.next = l1;
          l1 = l1.next;
      }else{
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next; // 每次都把cur指向了更小链的头结点
      console.log('cur loop结束', cur);
      cur.visualShow();
      console.log('l1  结束');
      l1 && l1.visualShow();
      console.log('l2 结束');
      l2 && l2.visualShow();
      console.log('本轮循环后的preHead', preHead);
      preHead.visualShow();
      console.log('-------------');
  }

  cur.next = l1 || l2;
  console.log('最终的cur', cur);
  cur.visualShow();
  console.log('最终的preHead', preHead);
  preHead.visualShow();
  return preHead.next;
}

// 模拟执行
const mockList1 = ListNode.create([3, 5, 7]);
const mockList2 = ListNode.create([2, 6, 8]);
console.log('mockList1');
mockList1.visualShow()
console.log('mockList2');
mockList2.visualShow()

const mergedList = mergeTwoLists(mockList1, mockList2);
console.log('mergedList');
mergedList.visualShow()
