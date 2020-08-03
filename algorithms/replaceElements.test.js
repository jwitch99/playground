const cases = [
    [[17, 18, 5, 4, 6, 1], [18, 6, 6, 6, 1, -1]],
    [[0, 1, 2], [2, 2, -1]],
    [[0], [-1]],
    [[5, 4, 3, 2, 1], [4, 3, 2, 1, -1]]
]

const replaceElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let maxRight = -1

        for (let j = i + 1; j < arr.length; j++) {
            maxRight = Math.max(maxRight, arr[j])
        }

        arr[i] = maxRight
    }

    return arr
}

/**
 * Walking from the reverse direction
 * allows me to keep the max element
 */
const replaceElements2 = (arr) => {
    let max = arr[arr.length - 1]
    let newMax

    for (let i = arr.length - 2; i >= 0; i--) {
        newMax = Math.max(max, arr[i])
        arr[i] = max
        max = newMax
    }

    arr[arr.length -1] = -1
    return arr
}

describe('replaceElements', () => {
    test.each(cases)(
        'replaceElements(%p)',
        (arr, expectation) => {
            expect(replaceElements(Array.from(arr))).toEqual(expectation)
        }
    )

    test.each(cases)(
        'replaceElements2(%p)',
        (arr, expectation) => {
            expect(replaceElements2(Array.from(arr))).toEqual(expectation)
        }
    )
})