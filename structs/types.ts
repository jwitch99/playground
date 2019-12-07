export interface NodeType<T> {
    next?: NodeType<T>
    prev?: NodeType<T>
    data: T
}

export interface LinkedListType<T> {
    push(...obj: T[]): void

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