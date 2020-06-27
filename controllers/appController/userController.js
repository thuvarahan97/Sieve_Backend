const User = require('../../models/appModel/userModel');
const hashFunctions = require('../../utils/hash_function');
const validation = require('../../utils/validation');

exports.user_login2 = (req, res, next) => {
    const email = 'temp123@gmail.com';//req.body.email;
    const password = 'sieve';//req.body.password
    return User.getUserFromEmail(email).then((user) => {
        if (user) {
            res.status(200).json({
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
    return User.getUserFromEmail(email).then((user) => {
        if (user) {
            if (hashFunctions.checkHash(password, user.password)) {
                if (user.permitted == 'yes') {
                    res.status(200).json({
                        id: user.id.toString(),
                        email: user.email,
                        password: password
                    });
                } else {
                    res.status(404).json({ serverError: false, blockedError: true, error: 'Account Blocked!' });
                }
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
    if ((validation.emailValidation(email)) && (validation.passwordValidation(password))) {
        return User.insert(req.body).then(() => {
            res.status(200).json({ success: true });
        }).catch(() => {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        });
    } else {
        res.status(404).json({ serverError: false, error: 'Incorrect Email or Password' });
    }
}

exports.user_signup_gf = (req, res, next) => {
    const email = req.body.email;
    const uid = req.body.uid;
    const imageUrl = req.body.imageUrl;
    if (validation.emailValidation(email)) {
        return User.getUserFromUid(uid).then((user) => {
            if (user == undefined) {
                return User.insertGF(req.body).then(() => {
                    return User.getUserFromUid(uid).then((user1) => {
                        res.status(200).json({
                            id: user1.id.toString(),
                            email: user1.email,
                            imageUrl: user1.imageUrl,
                            uid: user1.uid,
                        });
                    }).catch(() => {
                        res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                    });

                }).catch(() => {
                    res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                });
            } else {
                if (user.permitted == 'yes') {
                    res.status(200).json({
                        id: user.id.toString(),
                        email: user.email,
                        imageUrl: user.imageUrl,
                        uid: user.uid,
                    });
                } else {
                    res.status(404).json({ serverError: false, blockedError: true, error: 'Account Blocked!' });
                }
            }
        }).catch(() => {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        });
    } else {
        res.status(404).json({ serverError: false, error: 'Incorrect Email or Password' });
    }
}