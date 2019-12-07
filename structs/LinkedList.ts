import {LinkedListType} from './types'
import {Node} from './DoublyLinkedNode'

export class LinkedList<T> implements LinkedListType<T> {

    start?: Node<T>
    tail?: Node<T>
    length = 0

    push(...data: T[]): void {
        for (let element of data) {
            this.addElement(element)
        }
    }

    clear(): void {
        this.start = null
        this.tail = null
    }

    contains(obj: T): boolean {
        return Boolean(this.getNodeByData(obj).node)
    }

    get(index: number): T {
        const node = this.getNode(index)
        return node ? node.data : null
    }

    getNode(index: number): Node<T> {
        if (index < 0 || this.isEmpty()) return null
        let counter = 0
        for (const node of this.start) {
            if (counter === index) return node
            counter++
        }
    }

    getNodeByData(obj: T): { node: Node<T>, index: number } {
        if (this.isEmpty()) return {node: null, index: null}
        let index = 0
        for (const node of this.start) {
            if (node.data === obj) {
                return {node, index}
            }

            index++
        }
    }

    isEmpty(): boolean {
        return !Boolean(this.start)
    }

    remove(index: number): T {
        const node = this.getNode(index)
        return this.removeNode(node)
    }

    removeObject(obj: T): T {
        const {node} = this.getNodeByData(obj)
        return this.removeNode(node)
    }

    set(index: number, element: T): T {
        let current = this.start
        for (let i = 0; Boolean(current); i++) {

            if (i === index) {
                const temp = current.data
                current.data = element
                return temp
            }

            current = current.next
        }

        return null
    }

    toArray(): T[] {
        if(this.isEmpty()) return []

        let data: T[] = []

        for(const node of this.start) {
            data.push(node.data)
        }

        return data
    }

    private removeNode(node: Node<T>): T {
        if (!node) return null
        if (!node.prev) {
            this.removeStartNode()
        } else if (!node.next) {
            this.removeTailNode()
        } else {
            node.prev.next = node.next
            node.next.prev = node.prev.next
        }

        this.length--
        return node.data
    }

    private addElement(data: T) {
        const node = new Node(data)
        if (!this.start) {
            this.start = node
        } else {
            this.tail.append(node)
        }
        this.length++
        this.tail = node
    }

    private removeStartNode() {
        const temp = this.start

        if (!this.start.next) {
            this.start = null
            this.tail = null
            return temp
        }

        this.start = temp.next

        if (this.start) {
            this.start.prev = null
            this.resetEnd()
        }

        return temp
    }

    private removeTailNode() {
        this.tail = this.tail.prev
        this.tail.next = null
    }

    private resetEnd() {
        if (this.start) {
            for (const next of this.start) {
                this.tail = next
            }
        }
    }
}
