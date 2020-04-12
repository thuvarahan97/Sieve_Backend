var express = require('express');
var connection = require('./../config');
const Cryptr = require('cryptr');
var router = express.Router();
var cryptr = new Cryptr('SievePassword');

router.post('/', function(req, res, next) {
    // const firstname = req.body.firstname.charAt(0).toUpperCase() + req.body.firstname.slice(1).toLowerCase();
    // const lastname = req.body.lastname.charAt(0).toUpperCase() + req.body.lastname.slice(1).toLowerCase();
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    var success = false;
    var code = 0;
    var message = "";

    if ((email != "" && email != null) && (password != "" && password != null))  {
        if (password === confirmPassword) {
            doSignUp(email, encryptedPassword);
        }
        else {
            code = 3;
            message = "Passwords do not match!";
            res.send({sucess: success, code: code, message: message});
        }
    }
    else {
        code = 2;
        message = "Some fields are empty!";
        res.send({sucess: success, code: code, message: message});
    }

    function doSignUp(email, password) {
        connection.query('SELECT * FROM tbl_common_user WHERE email = ?',[email], function (error, results) {
            if (error) {
                message = 'Error occured! Try again.';
                res.send({sucess: success, code: code, message: message, data: data});
            }
            else {
                if (results.length == 0) {
                    connection.query('INSERT INTO tbl_common_user (email, password) VALUES(?,?)',[email, password], function (error, results) {
                        if (error) {
                            message = "Error occured! Try again.";
                            res.send({sucess: success, code: code, message: message});
                        }
                        else{
                            success = true;
                            code = 1;
                            message = "Your account has been created successfully!";
                            res.send({sucess: success, code: code, message: message});
                        }
                    });
                }
                else {
                    code = 4;
                    message = "Email already exists!";
                    res.send({sucess: success, code: code, message: message});
                }
            }
        });
    }
});

module.exports = router;