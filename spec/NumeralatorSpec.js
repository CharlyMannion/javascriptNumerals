describe("Numeralator", function() {

    beforeEach(function() {
        numeralator = new Numeralator();
    })

    describe("A function to convert integers 1-10 to roman numerals", function() {
        it("should convert 1 to I", function() {
            expect(numeralator.convertInteger(1)).toEqual("I");
        })
        // it("should convert 2 to II", function() {
        //     expect(numeralator.convertInteger(2)).toEqual("II");
        // })
        // it("should convert 3 to III", function() {
        //     expect(numeralator.convertInteger(3)).toEqual("III");
        // })
    })

})