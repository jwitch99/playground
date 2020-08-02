/**
 * Original impl.
 */
const removeElement = (arr, ommission) => {
    let end = arr.length - 1
    let currentIndex = 0
    while (end >= 0 && currentIndex <= end) {
        if (arr[end] === ommission) {
            end--
        } else if (arr[currentIndex] === ommission) {
            arr[currentIndex] = arr[end]
            end--
            currentIndex++
        } else {
            currentIndex++
        }
    }

    return end + 1
}

/**
 * This one uses splice to just remove the element from the array
 * The important bit here is the decrement of i in the loop after the splice
 */
const removeElement2 = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

/**
* This feels like the simplest solution.
 * Given precondition that the values of the array after the filtered
 * length don't matter we can just overwrite the array with the non-filtered
 * values.
 */
const removeElement3 = (nums, value) => {
    // overwrite the existing array with filtered values
    let adjustedIndex = 0;
    let currentIndex = 0;
    while(currentIndex < nums.length) {
        if(nums[currentIndex] !== value) {
            nums[adjustedIndex] = nums[currentIndex]
            adjustedIndex++
        }

        currentIndex++
    }

    return adjustedIndex;
}

const cases = [
    [[3], 3, 0],
    [[0, 3], 3, 1],
    [[3, 2, 2, 3], 3, 2]
]


describe('filterElements', () => {

    test.each(cases)(
        'removeElement(%p, %i)',
        (array, filteredValue, expectedLength) => {
            expect(removeElement(Array.from(array), filteredValue)).toEqual(expectedLength)
        }
    )

    test.each(cases)(
        'removeElement2(%p, %i)',
        (array, filteredValue, expectedLength) => {
            expect(removeElement2(Array.from(array), filteredValue)).toEqual(expectedLength)
        }
    )

    test.each(cases)(
        'removeElement3(%p, %i)',
        (array, filteredValue, expectedLength) => {
            expect(removeElement3(Array.from(array), filteredValue)).toEqual(expectedLength)
        }
    )
})