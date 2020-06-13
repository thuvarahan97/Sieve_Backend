const Users = require('../../models/adminModel/adminUsersModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Users.getAllData()));
        });
    };
    return fetchData().then((result)=>{
        res.status(200).render('users', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.blockUser = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Users.blockUser(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/users');
            }
            else {
                res.status(409).redirect('/users');
            }
        }).catch(()=>{
            res.status(500).redirect('/users');
        });
    }
    else{
        res.status(400).redirect('/users');
    }
}

exports.unblockUser = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return Users.unblockUser(id).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/users');
            }
            else {
                res.status(409).redirect('/users');
            }
        }).catch(()=>{
            res.status(500).redirect('/users');
        });
    }
    else{
        res.status(400).redirect('/users');
    }
}