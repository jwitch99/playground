/**
 * Second attempt
 *
 * Trying this again but without string manipulations.
 * If I can incorporate dynamic checking of the subtraction
 * and also use a for loop instead of a while I can just the index
 *
 */

const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
])

module.exports.valueOf = (str) => {

    let total = 0
    let previousValue = -1

    // if the preceding number is gte current number then subtract
    // IV = 4, prevValue = 5, currentValue = 1
    // V total = 5, I [(prev=5, curr=1) 5 > 1 -> 5 - 1]
    for (let i = str.length - 1; i >= 0; i--) {
        let currentValue = map.get(str[i])
        if (previousValue > currentValue) {
            total -= currentValue
        } else {
            total += currentValue
        }

        previousValue = currentValue
    }

    return total
}