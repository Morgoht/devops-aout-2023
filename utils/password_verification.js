
module.exports = function (password) {
    if(password.length < 8 ){
        return false;
    } 

    const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!
        specialChar.test(password)) {
        return false;
      }
    
      const contientLettre = /[a-zA-Z]/;
      const contientChiffre = /[0-9]/;
      if (!contientLettre.test(password) || !contientChiffre.test(password)) {
        return false;
      }
    
      // Si toutes les conditions sont remplies, le mot de passe est valide
      return true;
    
    
}