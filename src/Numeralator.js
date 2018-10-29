function Numeralator() {

    var basicNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const getNumeral = (integer) => ({
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X"
    })[integer];

    this.rules = [ 
        {
            matchRoman: function(integer) { if ( integer > 40 && integer <= 50 ) return true }, 
            getValue: function(integer) { return "XL" + getNumeral(integer-40) }
        },
        {
            matchRoman: function(integer) { if ( integer > 30 && integer <= 40 ) return true }, 
            getValue: function(integer) { return "XXX" + getNumeral(integer-30) }
        },
        {
            matchRoman: function(integer) { if ( integer > 20 && integer <= 30 ) return true }, 
            getValue: function(integer) { return "XX" + getNumeral(integer-20) }
        },
        {
            matchRoman: function(integer) { if ( integer > 10 && integer <= 20 ) return true }, 
            getValue: function(integer) { return "X" + getNumeral(integer-10) }
        },
        {
            matchRoman: function(integer) { if (basicNum.includes(integer)) return true }, 
            getValue: function(integer) { return getNumeral(integer) }
        },
    ]
}

Numeralator.prototype.convertInteger = function(integer) {
    var matchingRule = this.rules.find((rule) => rule.matchRoman(integer));
    return matchingRule.getValue(integer);
}
