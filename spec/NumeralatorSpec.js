describe("Numeralator", function() {

    beforeEach(function() {
        numeralator = new Numeralator();
    })

    describe("A function to convert integers to roman numerals", function() {
        it("should convert 1 to I", function() {
            expect(numeralator.convertInteger(1)).toEqual("I");
        })
        it("should convert 2 to II", function() {
            expect(numeralator.convertInteger(2)).toEqual("II");
        })
    })

})