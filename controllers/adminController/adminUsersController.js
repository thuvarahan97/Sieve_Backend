const Users = require('../../models/adminModel/adminUsersModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Users.getAllData()));
        });
    };
    fetchData().then((result)=>{
        res.status(200).render('users', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}