function Numeralator() {
    this.rules = [ 
        {
            matchRoman: function(integer) { if (integer === 1) return true },
            getValue: function(integer) { return "I" }
        }
    ]
}

Numeralator.prototype.convertInteger = function(integer) {
    var matchingRule = this.rules.find((rule) => rule.matchRoman(integer));
    return matchingRule.getValue(integer);
}