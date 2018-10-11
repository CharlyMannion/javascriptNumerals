describe("RomanNumeral", function() {

    beforeEach(function() {
        romanNumeral = new RomanNumeral();
    })

    describe("when you create a new roman numeral instance", function() {
        it("should have an object containing the basic roman numerals", function() {
            expect(romanNumeral.basicNumerals).toEqual({1: "I"});
        });
    })

    // describe("A function to convert an integer to a roman numeral", function() {
    //     it("should return the Roman Numeral for 1", function() {
    //         expect(romanNumeral.convertInteger(1)).toEqual("I");
    //     });
    //     it("should return the Roman Numeral for 5", function() {
    //         expect(romanNumeral.convertInteger(5)).toEqual("V");
    //     });
    //     it("should return the Roman Numeral for 10", function() {
    //         expect(romanNumeral.convertInteger(10)).toEqual("X");
    //     });
    //     it("should return the Roman Numeral for 50", function() {
    //         expect(romanNumeral.convertInteger(50)).toEqual("L");
    //     });
    //     it("should return the Roman Numeral for 100", function() {
    //         expect(romanNumeral.convertInteger(100)).toEqual("C");
    //     });
    //     it("should return the Roman Numeral for 1000", function() {
    //         expect(romanNumeral.convertInteger(1000)).toEqual("M");
    //     });
    // });
})