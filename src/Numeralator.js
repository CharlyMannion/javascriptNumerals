function Numeralator() {

    var basicNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    this.rules = [ 
        {
            matchRoman: function(integer) { if (integer === 15) return true},
            getValue: function(integer) {return "XV"}
        },
        {
            matchRoman: function(integer) { if (basicNum.includes(integer)) return true },
            getValue: function(integer) { switch (integer) {
                case 1:
                    return("I");
                    break;
                case 2:
                    return("II");
                    break;    
                case 3:
                    return("III");
                    break; 
                case 4:
                    return("IV");
                    break; 
                case 5:
                    return("V");
                    break;
                case 6:
                    return("VI");
                    break;    
                case 7:
                    return("VII");
                    break; 
                case 8:
                    return("VIII");
                    break;   
                case 9:
                    return("IX");
                    break;                 
                case 10:
                    return("X");
                    break;       
            } }
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
