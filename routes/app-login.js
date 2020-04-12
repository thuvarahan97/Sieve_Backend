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

   if ((email != "" && email != null) && (password != "" && password != null))  {
      const encryptedPassword = cryptr.encrypt(password);
      doLogin(email, encryptedPassword);
   }
   else {
      code = 2;
      message = "Some fields are empty!";
      res.send({sucess: success, code: code, message: message});
   }

   function doLogin(email, password) {
      connection.query('SELECT * FROM tbl_common_user WHERE email = ?',[email], function (error, results) {
         if (error) {
            message = 'Error occured! Try again.';
            res.send({sucess: success, code: code, message: message, data: data});
         }
         else {
            if (results.length > 0) {
              //  decryptedPassword = cryptr.decrypt(results[0].password);
               if (password == results[0].password) {
                  data['user_id'] = results['common_user_id']
                  data['email'] = results['email']
                  success = true;
                  code = 1;
                  message = "Successfully Logged In!";
                  res.send({sucess: success, code: code, message: message, data: data});
               }
               else {
                  code = 4;
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
   }
  
});

module.exports = router;
