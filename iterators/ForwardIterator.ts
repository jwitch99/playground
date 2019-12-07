import {NodeType} from '../structs/types'

export function ForwardIteration(head: NodeType<any>) {
    let current = undefined
    return {
        next() {

            if (current === null) {
                return {done: true, value: null}
            }

            if (current === undefined) {
                current = head
            } else {
                current = current.next
            }

            return {done: !Boolean(current), value: current}
        }
    }
}