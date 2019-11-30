const sumsToZero = (arrays) => {
    return arrays.reduce((acc, cur) => acc + cur, 0) === 0
}

const getPermutations = (i, j, nums, added, permutations) => {
    for (let k = j + 1; k < nums.length; k++) {
        let permutation = [nums[i], nums[j], nums[k]].sort()
        const matchStr = JSON.stringify(permutation)
        if (!added.has(matchStr) && sumsToZero(permutation)) {
            added.add(matchStr)
            permutations.push(permutation)
        }
    }

    return permutations
}

// length 4 [1,2,3,4] , i = 0, 1, 2 [length (4) - num = 1]

var threeSum = function (nums) {
    const zeroSums = []
    const added = new Set()
    nums = nums.sort()
    for (let i = 0; i <= nums.length - 3; i++) {
        if(nums[i] > 0) break;
        for (let j = i + 1; j <= nums.length - 2; j++) {
            getPermutations(i, j, nums, added, zeroSums)
        }
    }

    return zeroSums
}

threeSum(
    [-15, 10, 0, -2, 14, -1, -10, -14, 10, 12, 6, -6, 10, 2, -11, -9, 2, 13, 2, -9, -14, -12, -10, -12, 13, 13, -10, -3, 2, -11, 3, -6, 6, 10, 7, 5, -13, 4, -2, 12, 1, -11, 14, -4, 6, -12, -6, -14, 8, 11, -8, 1, 7, -3, 5, 5, -13, 10, 9, -3, 6, -10, 6, -3, 7, -9, -13, 9, 10, 0, -1, -11, 4, -10, -8, -13, -15, 2, -12, 8, -2, -12, -14, -10, -8, 6, 2, -5, -7, -11, 7, 14, -6, -10, -12, 8, -4, -10, -5, 14, -3, 9, -12, 8, 14, -13]
)