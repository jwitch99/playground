/**
 * First solution, it works but I hate that I have
 * two instances of Math.max.
 * @param {number[]} numbers
 * @return {number}
 */
let findMaxConsecutiveOnes = function (numbers) {
    let max = 0
    let currentCount = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            currentCount++
        } else {
            max = Math.max(max, currentCount)
            currentCount = 0
        }
    }

    return Math.max(max, currentCount)
}

let findMaxConsecutiveOnes2 = function (numbers) {
    let max = 0
    let currentCount = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1) {
            currentCount++
        } else {
            currentCount = 0
        }

        if (currentCount > max) {
            max = currentCount
        }
    }

    return max
}


const testCases = [
    {
        arr: [1],
        answer: 1
    },
    {
        arr: [1, 1],
        answer: 2
    }, {
        arr: [1, 1, 0],
        answer: 2
    }
]

const cases = [
    [[1], 1],
    [[1, 1], 2],
    [[1, 1, 0], 2]
]


describe('findMaxConsecutiveOnes', () => {

    test.each(cases)(
        'findMaxConsecutiveOnes(%p)',
        (arr, expectation) => {
            expect(findMaxConsecutiveOnes(arr)).toBe(expectation)
        })

    test.each(cases)(
        'findMaxConsecutiveOnes(%p)',
        (arr, expectation) => {
            expect(findMaxConsecutiveOnes2(arr)).toBe(expectation)
        })
})