function addition(a, b) {
    if (a == "" || b == "") {
        return 'insufficient data entered';
    } else if (typeof a != "number" || typeof b != "number") {
        return 'wrong data type';
    } else if (a === NaN || b === NaN) {
        return 'wrong data type';
    } else {
        return a + b;
    }
}

module.exports = addition;