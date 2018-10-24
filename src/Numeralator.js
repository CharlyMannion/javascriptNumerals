function Numeralator() {

    // this.basicIntegers = [ { int: 1, rom: "I"}, { int: 2, rom: "II" }, { int: 3, rom: "III" } ]

    this.rules = [ 
        // {
        //     matchRoman: function(integer) { if (integer === this.basicIntegers.int) return true },
        //     getValue: function(integer) { return this.basicIntegers.rom }
        // },
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
        {
            matchRoman: function(integer) { if (integer === 6) return true},
            getValue: function(integer) {return "VI"}
        },
        {
            matchRoman: function(integer) { if (integer === 7) return true},
            getValue: function(integer) {return "VII"}
        },
        {
            matchRoman: function(integer) { if (integer === 8) return true},
            getValue: function(integer) {return "VIII"}
        },
        {
            matchRoman: function(integer) { if (integer === 9) return true},
            getValue: function(integer) {return "IX"}
        },
        {
            matchRoman: function(integer) { if (integer === 10) return true},
            getValue: function(integer) {return "X"}
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
