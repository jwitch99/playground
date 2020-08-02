const cases = [
    [[10, 2, 5, 3], true],
    [[7, 1, 14, 11], true],
    [[3, 1, 7, 11], false]
]

/**
 * Given an array arr of integers,
 * check if there exists two integers N and M
 * such that N is the double of M ( i.e. N = 2 * M).
 */


/**
 * Uses a Map to verify if the double exists. More memory usage but less work to do
 */
const checkIfExists = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i] / 2))
            return true

        if (map.has(nums[i] * 2))
            return true

        map.add(nums[i], i)
    }

    return false
}


/**
 * O(N^2) loops over whole array for each element in array checking for double value
 */
const checkIfExists2 = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === 2 * nums[j]) {
                return true
            }
        }
    }

    return false
}


describe('checkIfExists', () => {

    test.each(cases)(
        'checkIfExists(%p)',
        (array, expected) => {
            expect(checkIfExists(array)).toEqual(expected)
        }
    )

    test.each(cases)(
        'checkIfExists2(%p)',
        (array, expected) => {
            expect(checkIfExists2(array)).toEqual(expected)
        }
    )
})