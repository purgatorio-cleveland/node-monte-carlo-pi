function sumArray(arr) {
    let sum = 0;
    arr.forEach(x => sum += x);
    return sum;
}

function commafyNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

// Exports
module.exports = {
    "sumArray" : sumArray,
    "commafyNumber" : commafyNumber
}
