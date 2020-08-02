const testFn = (cases, fn) => {
    test.each(cases)(fn.name, (test, expected) => {
        expect(fn(test)).toEqual(expected)
    })
}

var sortedSquares = function (A) {
    return A.map(x => x * x).sort((a, b) => a - b)
}

testFn([
    [[-4, -1, 0, 3, 10], [0, 1, 9, 16, 100]],
    [[-7, -3, 2, 3, 11], [4, 9, 9, 49, 121]]
], sortedSquares)


const insertAndShift = (arr, index, value) => {
    let currentValue = value
    let nextValue = null
    for (let i = index; i < arr.length; i++) {
        nextValue = arr[i] // 2
        arr[i] = currentValue // 0
        currentValue = nextValue // 2
    }
}

const duplicateAndShiftZeros = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            insertAndShift(arr, i + 1, 0)
            i += 1
        }
    }
}


describe('insertAndShift', () => {
    const test1 = [1, 2, 3, 4, 5]
    insertAndShift(test1, 1, 0)
    expect(test1).toEqual([1, 0, 2, 3, 4])

    insertAndShift(test1, 0, 0)
    expect(test1).toEqual([0, 1, 0, 2, 3])
})

describe('duplicateAndShiftZeros', () => {
    it('works', () => {
        const test1 = [1, 0, 2, 3, 0, 4, 5, 0]
        duplicateAndShiftZeros(test1)
        expect(test1).toEqual([1, 0, 0, 2, 3, 0, 0, 4])
    })

    it('works2', () => {
        const test2 = [1, 2, 3]
        duplicateAndShiftZeros(test2)
        expect(test2).toEqual([1, 2, 3])
    })
})

const mergeSortedArrays = (nums1, m, nums2, n) => {
    let i = 0
    while (nums2.length !== 0) {
        if (i === m) {
            nums1.splice(m, nums2.length, ...nums2)
            break
        } else if (nums2[0] < nums1[i]) {

            insertAndShift(nums1, i, nums2.shift())
            m++
        }

        i++
    }

    return nums1
}

const mergedSortedArraysTwo = (A, a, B, b) => {
    let index = a + b - 1
    let indexA = a - 1
    let indexB = b - 1
    while(index >= 0) {
        if (indexB < 0 || A[indexA] > B[indexB]) {
            A[index] = A[indexA]
            indexA--
        } else {
            A[index] = B[indexB]
            indexB--
        }

        index--
    }

    return A
}

describe('mergeSortedArrays', () => {
    it('test1', () => {
        expect(mergedSortedArraysTwo(
            [1, 2, 3, 0, 0, 0], 3,
            [2, 5, 6], 3
        )).toEqual([1, 2, 2, 3, 5, 6])
    })
    it('test2', () => {
        expect(mergedSortedArraysTwo(
            [0], 0,
            [1], 1
        )).toEqual([1])
    })
    it('test3', () => {
        expect(mergedSortedArraysTwo(
            [1, 0], 1,
            [2], 1
        )).toEqual([1, 2])
    })

    it('test4', () => {
        expect(mergedSortedArraysTwo(
            [-1, 0, 0, 3, 3, 3, 0, 0, 0], 6,
            [1, 2, 2], 3
        )).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3])
    })
})