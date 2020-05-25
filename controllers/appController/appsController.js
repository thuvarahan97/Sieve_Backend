const Apps = require('../../models/appModel/appsModel');

exports.view_all = (req, res, next) => {
    const category_id = req.body.category_id

    Apps.getAllApps(category_id).then((apps)=>{
        res.json({
            apps: apps
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}