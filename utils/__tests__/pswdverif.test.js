const passwordVerification = require ('../password_verification')

describe('test for password verification', () => {
    
    it("should return false has not contain letter or number", () => {
        const resultPassword = passwordVerification("12345678@a")
        expect(resultPassword).toBe(true);
    });
    
})