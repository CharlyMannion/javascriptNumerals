describe("RomanNumeral", function() {
    

    it("should return the Roman Numeral for 1", function() {
        romanNumeral = new RomanNumeral();
        expect(romanNumeral.convertInteger(1)).toEqual("I");
    });
})