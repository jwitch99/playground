const hasEvenDigits = (number) => {
    return (number.toString().length % 2) === 0;
}

let findNumbers = (numbers) => {
    return numbers.reduce((acc, number) => {
        return acc + (hasEvenDigits(number) ? 1 : 0)
    }, 0);
}

let findNumbers2 = (numbers) => {
    let count =0;
    for (let i = 0; i < numbers.length; i++) {
        count += (numbers[i].toString().length % 2) === 0 ?  1 : 0;
    }

    return count;
}

describe(findNumbers.name, () => {
    test.each([
        [[1, 2], 0],
        [[1, 2, 3], 0],
        [[555,901,482,1771], 1]
    ])('test case', (test, expected) => {
        expect(findNumbers(test)).toBe(expected)
    })
})