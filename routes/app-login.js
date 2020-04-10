var express = require('express');
var connection = require('./../config');
const Cryptr = require('cryptr');
var router = express.Router();
var cryptr = new Cryptr('SievePassword');

router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  var success = false;
  var code = 0;
  var message = "";
  var data = {};

  connection.query('SELECT * FROM tbl_users WHERE email = ?',[email], function (error, results) {
    if (error) {
       message = 'Error occured! Try again.';
       res.send({sucess: success, code: code, message: message, data: data});
    }
    else {
       if (results.length > 0) {
          decryptedPassword = cryptr.decrypt(results[0].password);
          if (password == decryptedPassword) {
             data['user_id'] = results['user_id']
             data['email'] = results['email']
             success = true;
             code = 1;
             message = "Successfully Logged In!";
             res.send({sucess: success, code: code, message: message, data: data});
          }
          else {
             code = 2;
             message = 'Incorrect Password!';
             res.send({sucess: success, code: code, message: message, data: data});
          }
       }
       else {
          code = 3;
          message = 'Email does not exist!';
          res.send({sucess: success, code: code, message: message, data: data});
       }
    }
 });

});

module.exports = router;
