import {NodeType} from './types'
import {ForwardIteration} from '../iterators/ForwardIterator'

export class Node<T> implements NodeType<T>, Iterable<Node<T>> {

    next?: Node<T>
    prev?: Node<T>
    data: T

    constructor(data: T, prev?: Node<T>, next?: Node<T>) {
        this.data = data
        this.prev = prev
        this.next = next
    }

    append(node: Node<T>) {
        let last: Node<T> = this
        while (last.next) {
            last = last.next
        }

        last.next = node
        node.prev = last
        return node
    }

    [Symbol.iterator]() {
        return ForwardIteration(this)
    }
}