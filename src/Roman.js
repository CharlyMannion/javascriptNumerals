function Roman(num) {
this.romanNumerals = ["M", "D", "C", "L", "X", "V,", "I"]
this.basicIntegers = [1000, 500, 100, 50, 10, 1]
this.convertedInteger = ""
}

Roman.prototype.romanize = function(i) {
    return i === 2 ? "II" : "I";
    // LOOP THROUGH THE BASICINTEGERS ARRAY AND SEE IF I MATCHES THE VALUE. IF IT DOES, SAVE THE INDEX VALUE IN A VARIABLE. THEN USE THE VARIABLE TO LOOK UP THE VALUE AT THIS INDEX IN THE ROMANNUMERALS ARRAY. RETURN IT.
}