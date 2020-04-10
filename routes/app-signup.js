var express = require('express');
var connection = require('./../config');
const Cryptr = require('cryptr');
var router = express.Router();
var cryptr = new Cryptr('SievePassword');

router.post('/', function(req, res, next) {
    const firstname = req.body.firstname.charAt(0).toUpperCase() + req.body.firstname.slice(1).toLowerCase();
    const lastname = req.body.lastname.charAt(0).toUpperCase() + req.body.lastname.slice(1).toLowerCase();
    const email = req.body.email;
    const password = req.body.password;
    const encryptedPassword = cryptr.encrypt(password);

    var success = false;
    var code = 0;
    var message = "";

    connection.query('SELECT RegisterUser(?,?,?,?) AS output',[firstname,lastname,email,encryptedPassword], function (error, results) {
        if (error) {
            message = "Error occured! Try again.";
            res.send({sucess: success, code: code, message: message});
        }
        else{
            switch (results[0]['output']){
                case 'success':
                    success = true;
                    code = 1;
                    message = "Your account has been created successfully!";
                    res.send({sucess: success, code: code, message: message});
                break;
                case 'null_values':
                    code = 2;
                    message = "Some fields are empty!";
                    res.send({sucess: success, code: code, message: message});
                break;
                case 'email_exists':
                    code = 3;
                    message = "Email already exists!";
                    res.send({sucess: success, code: code, message: message});
                break;
            }
        }
    });
});

module.exports = router;