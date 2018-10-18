function Numeralator() {
    this.numeralTypes = [ { roman: "I", int: 1 }, { roman: "II", int: 2 }, { roman: "III", int: 3 }, { roman: "IV", int: 4 }, { roman: "V", int: 5 }]
}

Numeralator.prototype.convertInteger = function() {
    console.log(this.numeralTypes[0].roman);
    return this.numeralTypes[0].roman;
}