const { ListNode } = require('../index.js')

// 由一个数组生成一个单链表
console.log(ListNode.create([4, 3]))

// 创建一个单独的节点
let singleNode = new ListNode(-1);
console.log('singleNode', singleNode);

// 可视化的单链表
ListNode.create([4, 3]).visualShow()

// 随机生成一个值为1至6的，长度为6的链表
ListNode.mock(6).visualShow()
