describe("Numeralator", function() {

    beforeEach(function() {
        numeralator = new Numeralator();
    })

    describe("converting basic intefers to roman numerals", function() {
        it("should convert 1 to I", function() {
            expect(numeralator.convertInteger(1)).toEqual("I");
        })
    })

})