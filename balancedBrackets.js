const pairMap = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
])

const isPair = (a, b) => {
    return b === pairMap.get(a)
}

const checkNextPosition = (str) => {
    if(str.length < 2) return false
    const a = str[0]
    const b = str[1]
    return isPair(a, b)
}

const checkLastPosition = (str) => {
    if(str.length < 2) return false
    const a = str[0]
    const b = str[str.length -1]
    return isPair(a, b)
}

const checkString = (str) => {
    let isValid = true
    let tempStr = String(str)
    while(isValid && tempStr.length) {
        if(checkNextPosition(tempStr)) {
            // remove first two characters
            tempStr = tempStr.substr(2)
        } else if(checkLastPosition(tempStr)) {
            tempStr = tempStr.slice(1, tempStr.length -1)
        } else {
            isValid = false
        }
    }

    return isValid
}

const checkStringHelper = (str, index) => {
    let tempStr = str

    while(tempStr.length) {
        if(isPair(tempStr[index], tempStr[index + 1])) {
            tempStr =  str.slice(0, index + 1) + str.slice(index + 1);
        } else {
            tempStr = checkString2(, index + 1)
        }
    }

    return tempStr
}

const checkString2 = (str) => {
    let index = 0;
    while(index <= str.length) {
        checkStringHelper(str, index)
        index++
    }
}

//
// const findPair = (currentIndex, matchedIndexes, str) => {
//     const char = str[currentIndex]
//     const pair = pairMap.get(char)
//     let index = currentIndex + 1
//     while(str[index]) {
//
//         if(matchedIndexes[index] === true) {
//             index++;
//             continue;
//         }
//
//         const charAtIndex = str[index]
//
//         if(charAtIndex === char) {
//             findPair(index, matchedIndexes, str)
//         }
//
//         // not taken and matches pair
//         if(charAtIndex === pair) {
//             matchedIndexes[index] = true
//             matchedIndexes[currentIndex] = true
//             break;
//         }
//
//         index++
//     }
//
//     return false;
// }

// const checkString2 = (str) => {
//     const matchedIndexes = Array(str.length).fill(false)
//     for(let i = 0; i < str.length; i++) {
//         if(matchedIndexes[i] === true) continue;
//         findPair(i, matchedIndexes, str)
//     }
//
//     return matchedIndexes.every(Boolean)
// }

function braces(values) {

    const results = []

    for(const str of values) {
        // const isValid = checkString(str)
        const isValid = checkString2(str)
        results.push(isValid ? 'YES': 'NO')
    }

    return results
}

const result = braces(['()'])
console.log('resuls', result)