const Dashboard = require('../../models/appModel/dashboardModel');

exports.view_all = (req, res, next) => {
    const fetchDashboard =  () => {
        return new Promise((resolve, reject) => {
            resolve((Dashboard.getAllDashboard()));
        });
    };
    return fetchDashboard().then((dapp)=>{
        res.status(200).json({
            dapp: dapp
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}