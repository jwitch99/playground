function permuations(str) {
    const arr = []
    permuationsHelper(str, '', arr)
    return arr
}

function permuationsHelper(str, prefix, arr) {
    if (str.length === 0) {
        arr.push(prefix)
    } else {
        for (let i = 0; i < str.length; i++) {
            const rem = str.substr(0, i) + str.substr(i + 1)
            permuationsHelper(rem, prefix + str[i], arr)
        }
    }
}

permuations('job')