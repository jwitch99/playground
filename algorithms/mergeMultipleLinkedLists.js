const {ListNode, buildList} = require('./mergeLinkedList')

function mergeMultipleListsRecursive(lists) {
    if (!lists.length) return null
    if (lists.length === 1) return lists[0]
    const mid = Math.floor((lists.length - 1) / 2) + 1
    let l1Node = mergeMultipleListsRecursive(lists.slice(0, mid))
    let l2Node = mergeMultipleListsRecursive(lists.slice(mid))
    const head = new ListNode()
    let listPointer = head
    while (l1Node && l2Node) {

        if (l1Node.val < l2Node.val) {
            listPointer.next = l1Node
            l1Node = l1Node.next
        } else {
            listPointer.next = l2Node
            l2Node = l2Node.next
        }

        listPointer = listPointer.next
    }

    listPointer.next = l1Node ? l1Node : l2Node
    return head.next
}

const plainLists = [
    [1, 2, 4],
    [1, 3, 4],
    [6, 7, 8]
]

const answer = plainLists
    .reduce((arr, c) => arr.concat(c), [])
    .sort()
    .join(' -> ')

const lists = plainLists.map(buildList)
lists.forEach(list => console.log(list.getValueOf()))
const merged = mergeMultipleListsRecursive(lists).getValueOf()
console.log('expected\t\t', answer)
console.log('found\t\t', merged)
console.log(answer === merged)