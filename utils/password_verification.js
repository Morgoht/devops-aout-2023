
module.exports = function (password) {
    if(password.length < 8 ){
        return false;
    } 

    const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!
        specialChar.test(password)) {
        return false;
      }
    
        return true;
    
}