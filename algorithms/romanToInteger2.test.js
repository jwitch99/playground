const {valueOf} = require('./romanToInteger2')

const testMap = new Map()
testMap.set('IV', 4)
testMap.set('III', 3)
testMap.set('IX', 9)
testMap.set('IX', 9)
testMap.set('LVIII', 58)
testMap.set('MCMXCIV', 1994)

const entries = Array.from(testMap.entries())

describe('Roman numbers to integers 2', () => {
    entries.forEach(testCase => {
        test(`${testCase[0]} equals ${testCase[1]}`, () => {
            expect(valueOf(testCase[0])).toBe(testCase[1])
        })
    })
})

