describe("Roman", function() {

    beforeEach(function() {
        roman = new Roman();
    })

    describe("a new roman numeral instance", function() {
        it("should have an array of the basic roman numerals", function() {
            expect(roman.romanNumerals).toEqual(["M", "D", "C", "L", "X", "V", "I"]);
        })
        it("should have an array of the corresponding integers", function() {
            expect(roman.basicIntegers).toEqual([1000, 500, 100, 50, 10, 5, 1]);
        })
        it("should have a placeholder for the converted integer as a numeral", function() {
            expect(roman.convertedInteger).toEqual("")
        })
    })

    describe("converting basic integers to roman numerals", function() {
        it("should convert 1000 to M", function() {
            expect(roman.romanize(1000)).toEqual("M")
        })
    })

    describe("converting non basic integers to roman numerals", function() {
        it("should convert 2 to II", function() {
            expect(roman.romanize(2)).toEqual("other")
        })
        // it("has an index key of 0", function() {
        //     expect(roman.indexKey).toEqual(0)
        // })
    })
})