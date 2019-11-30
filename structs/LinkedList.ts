export interface LinkedListType<T> {
    add(obj: T): void

    addAll(...obj: T[]): void

    clear(): void

    contains(obj: T): void

    get(index: number): T

    isEmpty(): boolean

    remove(index: number): T

    removeObject(obj: Object): T

    set(index: number, element: T): T

    toArray(): T[]

    length: number
}

export interface NodeType<T> {
    next?: NodeType<T>
    prev?: NodeType<T>
    data: T
}

export class Node<T> implements NodeType<T>, Iterable<Node<T>> {

    next?: Node<T>
    prev?: Node<T>
    data: T
    index: number

    constructor(data: T, prev?: Node<T>, next?: Node<T>, index?: number) {
        this.data = data
        this.prev = prev
        this.next = next
        this.index = index || 0
    }

    append(node: Node<T>) {
        let last = this
        while (last.next) {
            // @ts-ignore
            last = last.next
        }

        last.next = node
        node.prev = last
        node.index = last.index + 1
        return node
    }

    [Symbol.iterator]() {
        return {
            current: this,
            next() {
                if (this.current.next) {
                    this.current = this.current.next
                    return {done: Boolean(this.current.next), value: this.current}
                } else {
                    return {done: true, value: null}
                }
            }
        }
    }
}

export class LinkedList<T> implements LinkedListType<T> {

    start?: Node<T>
    end?: Node<T>

    get length() {
        return this.end ? 0 : this.end.index + 1
    }

    add(data: T): void {
        const node = new Node(data)

        if (!this.start) {
            this.start = node
        } else {
            this.end.append(node)
        }

        this.end = node
    }

    addAll(...list: T[]): void {
        for (const data of list) {
            this.add(data)
        }
    }

    clear(): void {
        this.start = null
        this.end = null
    }

    contains(obj: T): void {
        let current = this.start
        while (current.next) {
            current = current.next
        }

        for(const node of cu)

        last.next = node
        node.prev = last
        node.index = last.index + 1
        return node
    }

    get(index: number): T {
        return undefined
    }

    isEmpty(): boolean {
        return false
    }

    remove(index: number): T {
        return undefined
    }

    removeObject(obj: Object): T {
        return undefined
    }

    set(index: number, element: T): T {
        return undefined
    }

    toArray(): T[] {
        return []
    }

}
