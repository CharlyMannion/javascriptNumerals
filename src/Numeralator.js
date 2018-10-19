function Numeralator() {
    this.rules = [ 
        {
            matchRoman: function(integer) { if (integer === 1) return true },
            getValue: function(integer) { return "I" }
        },
        {
            matchRoman: function(integer) { if (integer === 2) return true},
            getValue: function(integer) {return "II"}
        },
        {
            matchRoman: function(integer) { if (integer === 3) return true},
            getValue: function(integer) {return "III"}
        },
        {
            matchRoman: function(integer) { if (integer === 4) return true},
            getValue: function(integer) {return "IV"}
        },
        {
            matchRoman: function(integer) { if (integer === 5) return true},
            getValue: function(integer) {return "V"}
        },
    ]
}

Numeralator.prototype.convertInteger = function(integer) {
    var matchingRule = this.rules.find((rule) => rule.matchRoman(integer));
    return matchingRule.getValue(integer);
}