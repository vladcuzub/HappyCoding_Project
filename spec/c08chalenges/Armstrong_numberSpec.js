const armstrongNumber = require('../../src/c08challenges/Armstrong_number')

describe('Armstrong Number', function () {
    it('Should return true when is Armstrong number', function () {

        let number = 153

        let result = armstrongNumber(number)

        expect(result).toBe(true)
    })

    it('Should return true when is Armstrong number', function () {

        let number = 1634

        let result = armstrongNumber(number)

        expect(result).toBe(true)
    })

    it('Should return true when is Armstrong number', function () {

        let number = 153

        let result = armstrongNumber(number)

        expect(result).toBe(true)
    })
   

})