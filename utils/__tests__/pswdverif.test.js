const passwordVerification = require ('../password_verification')

describe('test for password verification', () => {
    
    it("should return false has not contain special char", () => {
        const resultPassword = passwordVerification("12345678")
        expect(resultPassword).toBe(false);
    });
    it("should return false has  contain special char", () => {
        const resultPassword = passwordVerification("@12345678")
        expect(resultPassword).toBe(true);
    });
})