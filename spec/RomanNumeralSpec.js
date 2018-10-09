describe("RomanNumeral", function() {

    describe("A function to convert an integer to a roman numeral", function() {
        it("should return the Roman Numeral for 1", function() {
            romanNumeral = new RomanNumeral();
            expect(romanNumeral.convertInteger(1)).toEqual("I");
        });
        it("should return the Roman Numeral for 5", function() {
            romanNumeral = new RomanNumeral();
            expect(romanNumeral.convertInteger(5)).toEqual("V");
        });
    });
})