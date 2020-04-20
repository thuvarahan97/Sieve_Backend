const PrivacyLaws = require('../models/privacyLawsModel');

exports.view_all = (req, res, next) => {
    const fetchPrivacyNews =  () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyLaws.getAllPrivacyLaws()));
        });
    };
    fetchPrivacyNews().then((laws)=>{
        console.log (laws[0]);
        res.json({
            laws: laws
        });
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