const PrivacyTips = require('../../models/appModel/privacyTipsModel');

exports.view_all = (req, res, next) => {
    const fetchPrivacyTips =  () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyTips.getAllPrivacyTips()));
        });
    };
    fetchPrivacyTips().then((tips)=>{
        console.log (tips[0]);
        res.json({
            tips: tips
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