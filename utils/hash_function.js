const Cryptr = require('cryptr');
var cryptr = new Cryptr('SievePassword');

exports.encrypt = (password)=> {
    return cryptr.encrypt(password);
}

exports.decrypt = (hashPassowrd) => {
    return cryptr.decrypt(hashPassowrd);
}

exports.checkHash = (password, hashPassowrd) => {
    var tPassword = cryptr.decrypt(hashPassowrd);
    if(password==tPassword){
        return true;
    }else{
        return false;
    }
}