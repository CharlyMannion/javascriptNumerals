function Numeralator() {

    var basicNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const getNumeral = (integer) => ({
        0: "",
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C"
    })[integer];

    this.rules = [ 
        {
            matchRoman: function(integer) { if ( integer >= 100 && integer <= 109 ) return true }, 
            getValue: function(integer) { return getNumeral(100) + getNumeral(integer-100) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 90 && integer <= 99 ) return true }, 
            getValue: function(integer) { return getNumeral(90) + getNumeral(integer-90) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 80 && integer <= 89 ) return true }, 
            getValue: function(integer) { return getNumeral(80) + getNumeral(integer-80) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 70 && integer <= 79 ) return true }, 
            getValue: function(integer) { return getNumeral(70) + getNumeral(integer-70) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 60 && integer <= 69 ) return true }, 
            getValue: function(integer) { return getNumeral(60) + getNumeral(integer-60) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 50 && integer <= 59 ) return true }, 
            getValue: function(integer) { return getNumeral(50) + getNumeral(integer-50) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 40 && integer <= 49 ) return true }, 
            getValue: function(integer) { return getNumeral(40) + getNumeral(integer-40) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 30 && integer <= 39 ) return true }, 
            getValue: function(integer) { return getNumeral(30) + getNumeral(integer-30) }
        },
        {
            matchRoman: function(integer) { if ( integer >= 20 && integer <= 29 ) return true }, 
            getValue: function(integer) { return getNumeral(20) + getNumeral(integer-20) }
        },
        {
            matchRoman: function(integer) {
                if ( integer >= 10 && integer <= 19 ) { 
                    num1 = 11;
                    return num1
                }
            }, 
            getValue: function(integer, num1) { 
                console.log(num1);
                var num = 10;
                console.log(num);
                return getNumeral(num) + getNumeral(integer-num) 
            }
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
