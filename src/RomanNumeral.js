function RomanNumeral() {
}

RomanNumeral.prototype.convertInteger = function(integer) {
    if (integer === 1) {
        return 'I'
    } else
   return 'V'; 
}