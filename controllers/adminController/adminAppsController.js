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