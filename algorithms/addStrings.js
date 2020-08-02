/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

 Note:

 The length of both num1 and num2 is < 5100.
 Both num1 and num2 contains only digits 0-9.
 Both num1 and num2 does not contain any leading zero.
 You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */

function getNumericValue(num, i, power) {
    let result = 0;
    if(num.length > i) {
        result = Number(num[i]) * Math.pow(10, power)
    }

    return result;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length)

    let result = 0
    let power = 0

    num1 = num1.padStart(maxLength, '0')
    num2 = num2.padStart(maxLength, '0')

    for(let i = maxLength -1; i < maxLength && i > -1; i--) {
        const num1Value = getNumericValue(num1, i, power)
        const num2Value = getNumericValue(num2, i, power)
        result = result + num1Value + num2Value
        power++
    }

    return String(result)
}

addStrings('18582506933032752', '366213329703')