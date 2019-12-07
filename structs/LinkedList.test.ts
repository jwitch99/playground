import {LinkedList} from './LinkedList'

describe('Test append', () => {

    test(`start equals zero`, () => {
        const list: LinkedList<number> = new LinkedList()
        list.push(0, 1)
        expect(list.get(0)).toBe(0)
        expect(list.get(1)).toBe(1)
    })
})