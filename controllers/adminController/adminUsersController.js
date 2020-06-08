const Users = require('../../models/adminModel/adminUsersModel');
var createError = require('http-errors');

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
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}