const PrivacyTips = require('../../models/appModel/privacyTipsModel');

exports.view_all = (req, res, next) => {
    const fetchPrivacyTips =  () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyTips.getAllPrivacyTips()));
        });
    };
    return fetchPrivacyTips().then((tips)=>{
        res.status(200).json({
            tips: tips
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}