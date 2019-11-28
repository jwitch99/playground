const map = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
])

const valueOf = (str) => {

    let temp = str
    let value = 0

    while(temp) {
        let substr = temp.substr(0, 2)
        if(substr.length === 2 && map.get(substr)) {
            value += map.get(substr)
            temp = temp.substr(2, temp.length)
        } else {
            value += map.get(substr[0])
            temp = temp.substr(1, temp.length)
        }
    }

    return value

}

var romanToInt = function(s) {
    return valueOf(s);
};

const tests = [
    "LVIII"
].map(test => console.log(test, valueOf(test), 58))