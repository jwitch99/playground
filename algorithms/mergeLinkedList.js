function ListNode(val) {
    this.val = val
    this.next = null
    this.getValueOf = () => {
        let allNodes = [this.val]
        let curr = this.next
        while(curr) {
            allNodes.push(curr.val)
            curr = curr.next
        }

        return allNodes.join(' -> ')
    }
}
function buildList(arr) {
    const head = new ListNode(arr[0])
    let curr = head
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }

    return head
}
function valueOf(node) {
    return node ? Number(node.val) : Number.MAX_VALUE
}

function mergeListsIterative(l1, l2) {
    const head = new ListNode(Number.MIN_VALUE)
    let listPointer = head

    let l1Node = l1, l2Node = l2
    while (l1Node && l2Node) {

        if (valueOf(l1Node) < valueOf(l2Node)) {
            listPointer.next = new ListNode(l1Node.val)
            l1Node = l1Node.next
        } else {
            listPointer.next = new ListNode(l2Node.val)
            l2Node = l2Node.next
        }

        listPointer = listPointer.next
    }

    listPointer.next = l1Node ? l1Node : l2Node
    return head.next
}

const list1 = buildList([1, 2, 4])
const list2 = buildList([1, 3, 4])
const merged = mergeListsIterative(list1, list2)

module.exports = {
    ListNode,
    buildList,
}