const PrivacyLaws = require('../../models/appModel/privacyLawsModel');

exports.view_all = (req, res, next) => {
    const fetchPrivacyNews =  () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyLaws.getAllPrivacyLaws()));
        });
    };
    return fetchPrivacyNews().then((laws)=>{
        res.status(200).json({
            laws: laws
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}