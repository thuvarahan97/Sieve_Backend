exports.emailValidation = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { return true }
    else { return false }
}

exports.passwordValidation = (password)=>{
    if(/^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/.test(password)){return true}
    else {return false}
}