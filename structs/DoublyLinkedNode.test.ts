import {Node} from './DoublyLinkedNode'

describe('Append', () => {

    test('data to equal zero', () => {
        const node = new Node(0)
        expect(node.data).toBe(0)
    })

    test('iteration', () => {
        const nodes = [
            new Node(0),
            new Node(1),
            new Node(2)
        ]

        for (let i = 1; i < nodes.length; i++) {
            nodes[0].append(nodes[i])
        }

        let counter = 0

        expect.assertions(2 * 3)
        for(const current of nodes[0]) {
            const actualCurrent = nodes[counter]
            expect(current).toEqual(actualCurrent)
            expect(current.data).toEqual(counter)
            counter++
        }
    })
})