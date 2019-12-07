import {NodeType} from '../structs/types'

export function ReverseIteration(tail: NodeType<any>) {
    let current = undefined
    return {
        next() {

            if (current === null) {
                return {done: true, value: null}
            }

            if (current === undefined) {
                current = tail
            } else {
                current = current.prev
            }

            return {done: !Boolean(current), value: current}
        }
    }
}