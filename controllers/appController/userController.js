const User = require('../../models/appModel/userModel');
const hashFunctions = require('../../utils/hash_function');
const validation = require('../../utils/validation');

exports.user_login2 = (req, res, next) => {
    const email = 'temp123@gmail.com';//req.body.email;
    const password = 'sieve';//req.body.password
    User.getUserFromEmail(email).then((user) => {
        if (user) {
            console.log(user);
            res.json({
                email: user.email,
                password: password
            });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ error: 'Database Connection Faliure!' });
        }
    });
}

exports.user_login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    User.getUserFromEmail(email).then((user) => {
        if (user) {
            if (hashFunctions.checkHash(password, user.password)) {
                console.log(user);
                res.json({
                    id: user.id.toString(),
                    email: user.email,
                    password: password
                });
            }
            else {
                res.status(404).json({ serverError: false, error: 'Wrong Password' });
            }
        } else {
            res.status(404).json({ serverError: false, error: 'Wrong Email' });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.user_signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    if((validation.emailValidation(email))&&(validation.passwordValidation(password))){
        User.insert(req.body).then(() => {
            res.status(200).json({ success: true});
        }).catch(() => {
            res.status(404).json({serverError: true,error: 'Database Connection Faliure!' })
        });
    }else{
        res.status(404).json({ serverError: false, error: 'Incorrect Email or Password' });
    }
}