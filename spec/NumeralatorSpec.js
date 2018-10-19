describe("Numeralator", function() {

    beforeEach(function() {
        numeralator = new Numeralator();
    })

    describe("A function to convert integers 1-5 to roman numerals", function() {
        it("should convert 1 to I", function() {
            expect(numeralator.convertInteger(1)).toEqual("I");
        })
        it("should convert 2 to II", function() {
            expect(numeralator.convertInteger(2)).toEqual("II");
        })
        it("should convert 3 to III", function() {
            expect(numeralator.convertInteger(3)).toEqual("III");
        })
        it("should convert 4 to IV", function() {
            expect(numeralator.convertInteger(4)).toEqual("IV");
        })
        it("should convert 5 to V", function() {
            expect(numeralator.convertInteger(5)).toEqual("V");
        })
    })

    describe("A function to convert integers 6-10 to roman numerals", function() {
        it("should convert 6 to VI", function() {
            expect(numeralator.convertInteger(6)).toEqual("VI");
        })
        it("should convert 7 to VII", function() {
            expect(numeralator.convertInteger(7)).toEqual("VII");
        })
        it("should convert 8 to VIII", function() {
            expect(numeralator.convertInteger(8)).toEqual("VIII");
        })
        it("should convert 9 to IX", function() {
            expect(numeralator.convertInteger(9)).toEqual("IX");
        })
        it("should convert 10 to X", function() {
            expect(numeralator.convertInteger(10)).toEqual("X");
        })
    })

    describe("A function to convert integers that divide by 10 with remainder 1", function() {
        it("should convert 11 to XI", function() {
            expect(numeralator.convertInteger(11)).toEqual("XI");
        })
        it("should convert 21 to XXII", function() {
            expect(numeralator.convertInteger(21)).toEqual("XXII");
        })
    })

})