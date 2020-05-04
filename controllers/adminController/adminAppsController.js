const Apps = require('../../models/adminModel/adminAppsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllData()));
        });
    };
    fetchData().then((result)=>{
        res.status(200).render('apps', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewApp = (req, res, next) => {
    const app_id = req.query.app_id;
    Apps.getAppData(app_id).then((result)=>{
        res.status(200).render('app', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}