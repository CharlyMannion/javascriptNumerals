function RomanNumeral() {
    this.basicNumerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 1000: "M"}
}

RomanNumeral.prototype.convertInteger = function(integer) {
    return integer;
}