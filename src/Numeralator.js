function Numeralator() {

    var basicNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    this.rules = [ 
        // {
        //     matchRoman: function(integer) { if (integer % 10 === 5) return true},
        //     getValue: function(integer) { return (integer === 15) ? "XV" :  "V" }
        // },
        {
            matchRoman: function(integer) { if ( integer > 10 && integer <= 20 ) return true }, 
            getValue: function(integer) { return "X" + "I" }
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
                return getNumeral(integer) 
            }
        },

        // {
        //     matchRoman: function(integer) { if (integer % 10 === 1) return true},
        //     getValue: function(integer) {
        //         const getNumeral = (integer) => ({
        //             11: "XI",
        //             21: "XXI",
        //             31: "XXXI",
        //             41: "XXXXI"
        //         })[integer];
        //         return getNumeral(integer)   
        //     } 
        // },
    ]
}

Numeralator.prototype.convertInteger = function(integer) {
    var matchingRule = this.rules.find((rule) => rule.matchRoman(integer));
    return matchingRule.getValue(integer);
}
