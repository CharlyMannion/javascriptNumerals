describe("RomanNumeral", function() {

    beforeEach(function() {
        romanNumeral = new RomanNumeral();
    })

    describe("A function to convert an integer to a roman numeral", function() {
        it("should return the Roman Numeral for 1", function() {
            expect(romanNumeral.convertInteger(1)).toEqual("I");
        });
        it("should return the Roman Numeral for 5", function() {
            expect(romanNumeral.convertInteger(5)).toEqual("V");
        });
        it("should return the Roman Numeral for 10", function() {

        })
    });
})