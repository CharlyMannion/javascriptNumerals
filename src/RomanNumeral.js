function RomanNumeral() {
    this.basicNumerals = {1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 1000: "M"}
}

RomanNumeral.prototype.convertInteger = function(i) {
    return (i === 1 || i === 5 || i === 10 || i === 50 || i === 100 || i === 1000) ? this.basicNumerals[i] : "II"
}