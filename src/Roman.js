function Roman(num) {
this.romanNumerals = ["M", "D", "C", "L", "X", "V", "I"]
this.basicIntegers = [1000, 500, 100, 50, 10, 5, 1]
this.convertedInteger = ""
// this.indexKey = 0
}

Roman.prototype.romanize = function(i) {
    for(var index = 0; index < this.basicIntegers.length; index++) {
        console.log(this.basicIntegers[index]);
        console.log(this.romanNumerals[index]);
        return (i === this.basicIntegers[index]) ? this.romanNumerals[index] : "other";
    }
        // return (this.basicIntegers.includes(i)) ? "I" : "II";
    // LOOP THROUGH THE BASICINTEGERS ARRAY AND SEE IF I MATCHES THE VALUE. IF IT DOES, SAVE THE INDEX VALUE IN A VARIABLE. THEN USE THE VARIABLE TO LOOK UP THE VALUE AT THIS INDEX IN THE ROMANNUMERALS ARRAY. RETURN IT.
}