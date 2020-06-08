const Admin = require('../../models/adminModel/adminModel');
const hashFunctions = require('../../utils/hash_function');
const validation = require('../../utils/validation');
var createError = require('http-errors');

exports.admin_login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    
    Admin.getAdminFromEmail(email).then((user) => {
        if (user) {
            if (hashFunctions.checkHash(password, user.password)) {
                req.session.loggedin = true;
                req.session.admin_id = user.id.toString();
                req.session.admin_email = user.email;
                req.session.admin = user;
                res.redirect('/categories');
            }
            else {
                res.status(404).render('admin-login', { serverError: false, error: 'Incorrect Password' });
            }
        } else {
            res.status(404).render('admin-login', { serverError: false, error: 'Incorrect Email' });
        }
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
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
                            res.status(500).render('error', { serverError: true, error: createError(500) });
                        });
                    }
                    else {
                        res.status(404).render('admin-signup', { serverError: false, error: 'Email already exists!' });
                    }
                }).catch(() => {
                    res.status(500).render('error', { serverError: true, error: createError(500) });
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

exports.admin_logout = function(req, res){
    req.session.destroy(function(err) {
       res.redirect("/login");
    });
};