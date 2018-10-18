function Roman(num) {
this.romanNumerals = ["M", "D", "C", "L", "X", "V", "I"]
this.basicIntegers = [1000, 500, 100, 50, 10, 5, 1]
this.convertedInteger = ""
}

Roman.prototype.romanize = function(i) {
    for(var int of this.basicIntegers) {
        console.log("array integer", int);
        var intIndex = this.basicIntegers.indexOf(int);
        console.log("given integer", i);
        console.log("index value", intIndex);
        console.log("roman numeral found using index value", this.romanNumerals[intIndex]);
        return (i === int) ? this.romanNumerals[intIndex] : "other";
    }
    // LOOP THROUGH THE BASICINTEGERS ARRAY AND SEE IF I MATCHES THE VALUE. IF IT DOES, SAVE THE INDEX VALUE IN A VARIABLE. THEN USE THE VARIABLE TO LOOK UP THE VALUE AT THIS INDEX IN THE ROMANNUMERALS ARRAY. RETURN IT.
}