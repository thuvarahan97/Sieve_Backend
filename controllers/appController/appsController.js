const Apps = require('../../models/appModel/appsModel');

exports.view_all = (req, res, next) => {
    const category_id = req.body.category_id

    return Apps.getAllApps(category_id).then((apps)=>{
        res.status(200).json({
            apps: apps
        });
    }).catch((err) => {
        if (err) {
            res.status(500).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.view_all_search = (req, res, next) => {
    return Apps.getAllAppsForSearch().then((apps)=>{
        res.status(200).json({
            apps: apps
        });
    }).catch((err) => {
        if (err) {
            res.status(500).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}