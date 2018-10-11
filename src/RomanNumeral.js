function RomanNumeral() {
    this.basicNumerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 1000: "M"}
    this.trueValues = [1, 5, 10, 50, 100, 1000]
}

RomanNumeral.prototype.convertInteger = function(i) {
    return this.trueValues.includes(i) ? this.basicNumerals[i] : "II"
}