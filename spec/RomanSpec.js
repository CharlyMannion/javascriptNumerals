describe("Roman", function() {

    beforeEach(function() {
        roman = new Roman();
    })

    describe("a new roman numeral instance", function() {
        it("should have an array of the basic roman numerals", function() {
            expect(roman.romanNumerals).toEqual(["M", "D", "C", "L", "X", "V,", "I"]);
        })
    })
})