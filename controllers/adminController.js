const Admin = require('../models/adminModel');
const hashFunctions = require('../utils/hash_function');
const validation = require('../utils/validation');

exports.admin_login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    
    Admin.getAdminFromEmail(email).then((user) => {
        if (user) {
            if (hashFunctions.checkHash(password, user.password)) {
                req.session.loggedin = true;
                req.session.admin_id = user.id.toString();
                req.session.admin_email = user.email;
                res.redirect('/');
            }
            else {
                res.status(404).render('admin-login', { serverError: false, error: 'Incorrect Password' });
            }
        } else {
            res.status(404).render('admin-login', { serverError: false, error: 'Incorrect Email' });
        }
    }).catch((err) => {
        if (err) {
            res.status(404).render('admin-login', { serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.admin_signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if(validation.emailValidation(email)){
        if (validation.passwordValidation(password)) {
            if (password === confirmPassword) {
                Admin.checkEmailAvailability(email).then(count => {
                    if (count == 0) {
                        Admin.insert(req.body).then(() => {
                            res.status(200).render('admin-signup', { success: true });
                        }).catch(() => {
                            res.status(404).render('admin-signup', { serverError: true, error: 'Database Connection Faliure!' })
                        });
                    }
                    else {
                        res.status(404).render('admin-signup', { serverError: false, error: 'Email already exists!' });
                    }
                }).catch(() => {
                    res.status(404).render('admin-signup', { serverError: true, error: 'Database Connection Faliure!' })
                });;
            }
            else {
                res.status(404).render('admin-signup', { serverError: false, error: 'Passwords do not match!' });
            }
        }
        else {
            res.status(404).render('admin-signup', { serverError: false, error: 'Invalid Password' });
        }
    }
    else {
        res.status(404).render('admin-signup', { serverError: false, error: 'Invalid Email' });
    }
}