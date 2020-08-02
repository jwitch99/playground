const cases = [
    [[1, 1, 2], 2],
    [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5],
    [[0, 0], 1],
    [[0], 1]
]

const removeDuplicates = (nums) => {
    return Array.from(new Set(nums)).length
}

const removeDuplicates2 = (nums) => {
    let writtenIndex = 0
    let latestValue = null
    for (let i = 0; i < nums.length; i++) {
        if (latestValue !== nums[i]) {
            nums[writtenIndex] = nums[i]
            writtenIndex++
        }

        latestValue = nums[i]
    }

    return writtenIndex
}

describe('removeDuplicates', () => {

    test.each(cases)(
        'removeDuplicates(%p)',
        (array, expected) => {
            expect(removeDuplicates(array)).toEqual(expected)
        }
    )

    test.each(cases)(
        'removeDuplicates2(%p)',
        (array, expected) => {
            expect(removeDuplicates2(array)).toEqual(expected)
        }
    )
})