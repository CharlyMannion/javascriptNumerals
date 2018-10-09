function RomanNumeral() {
}

RomanNumeral.prototype.convertInteger = function(integer) {
    if (integer === 1) {
        return 'I'
    } else if (integer === 5) {
        return 'V'
    } else if (integer === 10) {
        return 'X'
    }
}