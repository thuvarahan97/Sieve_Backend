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
    
    const fetchAppData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAppData(app_id)));
        });
    };

    const fetchDataTypes = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataTypes(app_id)));
        });
    };

    const fetchDataUsage = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataUsage(app_id)));
        });
    };

    const fetchDataRemoval = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllDataRemoval(app_id)));
        });
    };

    const fetchContacts = () => {
        return new Promise((resolve, reject) => {
            resolve((Apps.getAllContacts(app_id)));
        });
    };

    fetchAppData().then((content) => {
        fetchDataTypes().then((types) => {
            fetchDataUsage().then((usages) => {
                fetchDataRemoval().then((removals) => {
                    fetchContacts().then((contacts) => {
                        result = {
                            content: content,
                            types: types,
                            usages: usages,
                            removals: removals,
                            contacts: contacts
                        };
                        res.status(200).render('app', { result: result });
                    }).catch((err) => {
                        if (err) {
                            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                        }
                    });
                }).catch((err) => {
                    if (err) {
                        res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                    }
                });
            }).catch((err) => {
                if (err) {
                    res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                }
            });
        }).catch((err) => {
            if (err) {
                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
            }
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}