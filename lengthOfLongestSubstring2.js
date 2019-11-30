const lengthOfLongestSubstring = (str) => {
    let current = ''
    let maxLength = 0
    for(const char of str) {
        if(current.indexOf(char) > -1) {
            // set the max
            maxLength = Math.max(maxLength, current.length)
            current = current.substr(current.indexOf(char) + 1, current.length) + char
        } else {
            current += char
        }
    }

    return Math.max(current.length, maxLength)
}


console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring('dvdf'))