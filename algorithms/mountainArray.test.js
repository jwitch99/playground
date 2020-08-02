const cases = [
    [[2, 1], false],
    [[3, 5, 5], false],
    [[0, 3, 2, 1], true],
    [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0], false]
]

/**
 * This solution will short-circuit for arrays neg/pos sorted
 * O(N)
 */
const isValidMountainArray = (arr) => {
    if (arr.length < 3) return false

    let pivot = null
    for (let i = 1; i < arr.length - 1; i++) {
        if (pivot === null && arr[i] > arr[i - 1] && arr[i + 1] < arr[i]) {
            pivot = arr[i]
        } else if (pivot === null && arr[i] > arr[i - 1]) {
            // ascending
        } else if (pivot !== null && arr[i + 1] < arr[i]) {
            // descending
        } else {
            return false
        }
    }

    return pivot !== null
}

/**
 * Like this because it adheres to the properties of the problem
 * and makes sense. The downside is that there's no short circuiting for
 * sorted/-sorted arrays. O(N)
 */

let isValidMountainArray2 = arr => {
    let N = arr.length, i = 0, j = N - 1;
    while (i + 1 < N  && arr[i] < arr[i + 1]) ++i; // left-to-right
    while (0 <= j - 1 && arr[j] < arr[j - 1]) --j; // right-to-left
    return 0 < i && i === j && j < N - 1; // j === i means we met at the peak
};

describe('isValidMountain', () => {
    test.each(cases)(
        'isValidMountainArray(%p)',
        (arr, expectation) => {
            expect(isValidMountainArray(arr)).toEqual(expectation)
        }
    )

    test.each(cases)(
        'isValidMountainArray2(%p)',
        (arr, expectation) => {
            expect(isValidMountainArray2(arr)).toEqual(expectation)
        }
    )
})