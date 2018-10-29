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

    describe("A function to convert integers 11-20 to roman numerals", function() {
        it("should convert 11 to XI", function() {
            expect(numeralator.convertInteger(11)).toEqual("XI");
        })
        it("should convert 13 to XIII", function() {
            expect(numeralator.convertInteger(13)).toEqual("XIII");
        })
        it("should convert 20 to XX"), function() {
            expect(numeralator.convertInteger(20)).toEqual("XX");
        }
    })

    describe("A function to convert integers 21-30 to numerals", function() {
        it("should convert 24 to XXIV", function() {
            expect(numeralator.convertInteger(24)).toEqual("XXIV");
        })
    })

    describe("A function to convert integers 31-39 to numerals", function() {
        it("should convert 39 to XXXIX", function() {
            expect(numeralator.convertInteger(39)).toEqual("XXXIX");
        })
        it("should convert 30 to XXX", function() {
            expect(numeralator.convertInteger(39)).toEqual("XXXIX");
        })
    })

    describe("A function to convert integers 40-49 to numerals", function() {
        it("should convert 45 to XLV", function() {
            expect(numeralator.convertInteger(45)).toEqual("XLV");
        })
        it("should convert 40 to XLV", function() {
            expect(numeralator.convertInteger(40)).toEqual("XL");
        })
    })

    describe("A function to convert integers 50-59 to numerals", function() {
        it("should convert 50 to L", function() {
            expect(numeralator.convertInteger(50)).toEqual("L");
        })
        it("should convert 58 to L", function() {
            expect(numeralator.convertInteger(58)).toEqual("LVIII");
        })
    })

    describe("A function to convert integers 60-69 to numerals", function() {
        it("should convert 60 to LX", function() {
            expect(numeralator.convertInteger(60)).toEqual("LX");
        })
        it("should convert 66 to LXVI", function() {
            expect(numeralator.convertInteger(66)).toEqual("LXVI");
        })
    })

    describe("A function to convert integers 70-79 to numerals", function() {
        it("should convert 70 to LXX", function() {
            expect(numeralator.convertInteger(70)).toEqual("LXX");
        })
        it("should convert 75 to LXXV", function() {
            expect(numeralator.convertInteger(75)).toEqual("LXXV");
        })
    })

    describe("A function to convert integers 80-89 to numerals", function() {
        it("should convert 80 to LXXX", function() {
            expect(numeralator.convertInteger(80)).toEqual("LXXX");
        })
        it("should convert 81 to LXXV", function() {
            expect(numeralator.convertInteger(81)).toEqual("LXXXI");
        })
    })

    describe("A function to convert integers 90-99 to numerals", function() {
        it("should convert 90 to XC", function() {
            expect(numeralator.convertInteger(90)).toEqual("XC");
        })
        it("should convert 99 to XCIX", function() {
            expect(numeralator.convertInteger(99)).toEqual("XCIX");
        })
    })

    describe("A function to convert integers 100-109 to numerals", function() {
        it("should convert 100 to C", function() {
            expect(numeralator.convertInteger(100)).toEqual("C");
        })
        it("should convert 103 to XCIX", function() {
            expect(numeralator.convertInteger(103)).toEqual("CIII");
        })
    })

})