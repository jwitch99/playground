const {intToRoman, intToRomanByVals} = require('./intToRoman')

const testMap = new Map()
testMap.set(0, '')
testMap.set(1, 'I')
testMap.set(4, 'IV')
testMap.set(3, 'III')
testMap.set(9, 'IX')
testMap.set(58, 'LVIII')
testMap.set(1994, 'MCMXCIV')

const entries = Array.from(testMap.entries())

describe('Roman integers to numerals', () => {
    entries.forEach(testCase => {
        test(`${testCase[0]} equals ${testCase[1]}`, () => {
            expect(intToRoman(testCase[0])).toBe(testCase[1])
        })
    })
})

describe('Roman integers to numerals TWO', () => {
    entries.forEach(testCase => {
        test(`${testCase[0]} equals ${testCase[1]}`, () => {
            expect(intToRomanByVals(testCase[0])).toBe(testCase[1])
        })
    })
})

