const passwordVerification = require ('../password_verification')

describe('test for password verification', () => {
    it("should return false as the password is not contain 8 char", () => {
        const resultPassword =  passwordVerification("1234567")
        expect(resultPassword).toBe(false)
    });
    it("should return true as the password contain 8 char", () => {
        const resultPassword =  passwordVerification("12345678")
        expect(resultPassword).toBe(true)
    });
    it("should return false has not contain special char", () => {
        const resultPassword = passwordVerification("12345678")
        expect(resultPassword).toBe(false);
    });
    it("should return false has  contain special char", () => {
        const resultPassword = passwordVerification("@12345678")
        expect(resultPassword).toBe(true);
    });
})