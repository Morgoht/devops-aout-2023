const passwordVerification = require ('../password_verification')

describe('test for password verification', () => {
    it("should return false as the password is not contain 8 char", () => {
        const resultPassword =  passwordVerification("12345678")
        expect(resultPassword).toBe(true)
    })
})