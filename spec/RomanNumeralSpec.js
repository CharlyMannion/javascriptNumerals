describe("RomanNumeral", function() {

    beforeEach(function() {
        romanNumeral = new RomanNumeral();
    })

    describe("when you create a new roman numeral instance", function() {
        it("should have an object containing the basic roman numerals", function() {
            expect(romanNumeral.basicNumerals).toEqual({1: "I", 5: "V", 10: "X", 50: "L", 100: "C", 1000: "M"});
        })
        it("should have an array listing the basic integers", function() {
            expect(romanNumeral.trueValues).toEqual([1, 5, 10, 50, 100, 1000]);
        })
    })

    describe("converting the most basic integers to roman numerals", function() {
        it("1 should have the value I", function() {
            expect(romanNumeral.basicNumerals[1]).toEqual("I");
        })
        it("5 should have the value V", function() {
            expect(romanNumeral.basicNumerals[5]).toEqual("V");
        })
        it("10 should have the value X", function() {
            expect(romanNumeral.basicNumerals[10]).toEqual("X");
        })
        it("50 should have the value L", function() {
            expect(romanNumeral.basicNumerals[50]).toEqual("L");
        })
        it("100 should have the value C", function() {
            expect(romanNumeral.basicNumerals[100]).toEqual("C");
        })
        it("1000 should have the value M", function() {
            expect(romanNumeral.basicNumerals[1000]).toEqual("M");
        })
    })

    describe("A function to convert a basic integer to a roman numeral", function() {
        it("should return the Roman Numeral for 1", function() {
            expect(romanNumeral.convertInteger(1)).toEqual("I");
        })
        it("should return the Roman Numeral for 5", function() {
            expect(romanNumeral.convertInteger(5)).toEqual("V");
        })
        it("should return the Roman Numeral for 10", function() {
            expect(romanNumeral.convertInteger(10)).toEqual("X");
        })
        it("should return the Roman Numeral for 50", function() {
            expect(romanNumeral.convertInteger(50)).toEqual("L");
        })
        it("should return the Roman Numeral for 100", function() {
            expect(romanNumeral.convertInteger(100)).toEqual("C");
        })
        it("should return the Roman Numeral for 1000", function() {
            expect(romanNumeral.convertInteger(1000)).toEqual("M");
        })
    })

    describe("A function to convert a more complicated number to a roman numeral", function() {
        it("should return the Roman Numeral for 2", function() {
            expect(romanNumeral.convertInteger(2)).toEqual("II");
        })
    })
})