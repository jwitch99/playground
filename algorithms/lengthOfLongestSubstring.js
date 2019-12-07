class Sequence {

    constructor(char) {
        this.charMap = new Set(char)
    }

    append(char) {
        if (this.charMap.has(char)) {
            return false
        }

        this.charMap.add(char)
        return true
    }

    get length() {
        return this.charMap.size
    }

    toString() {
        return Array.from(this.charMap).join('')
    }

    getCharsAfter(char) {
        const arr = Array.from(this.charMap)
        const chars = []
        let indexOfChar = arr.indexOf(char) + 1
        for(let i = indexOfChar; i < arr.length; i++) {
            chars.push(arr[i])
        }

        return chars;
    }
}

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {

    // create a class that has an .append() : T/F
    // if T you can continue if F you cannot append
    // keep track of the last greatest object and its length, if the current is longer than set the current as max
    // return max.length
    let longestSequence = new Sequence()
    let currentSequence = new Sequence()
    for (const char of s) {
        const canAppend = currentSequence.append(char)
        if (canAppend === false) {

            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence
            }

            const charsAfter = currentSequence.getCharsAfter(char).concat(char)
            currentSequence = new Sequence(charsAfter)
        }
    }

    return Math.max(longestSequence.length, currentSequence.length)
}

console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring('dvdf'))