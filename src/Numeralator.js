function Numeralator() {

    var basicNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    this.rules = [ 
        {
            matchRoman: function(integer) { if (integer === 15) return true},
            getValue: function(integer) {return "XV"}
        },
        {
            matchRoman: function(integer) { if (basicNum.includes(integer)) return true }, 
            getValue: function(integer) { 
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
                getNumeral(integer) 
            }
        },
        {
            matchRoman: function(integer) { if (integer % 10 === 1) return true},
            getValue: function(integer) { switch (integer) {
                case 11:
                    return("XI");
                    break;
                case 21:
                    return("XXI");
                    break;
                case 31:
                    return("XXXI");
                    break;
                case 41:
                    return("XXXXI");
                    break;     
            } }
        },
    ]
}

Numeralator.prototype.convertInteger = function(integer) {
    var matchingRule = this.rules.find((rule) => rule.matchRoman(integer));
    return matchingRule.getValue(integer);
}
