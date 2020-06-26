const DataTypes = require('../../models/adminModel/adminDataTypesModel');
var createError = require('http-errors');

exports.viewAll = (req, res, next) => {
    return DataTypes.getAllData().then((result)=>{
        res.status(200).render('datatypes', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).render('error', { serverError: true, error: createError(500) });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    res.status(200).render('datatypes.add.ejs');
}

exports.insert = (req, res, next) => {
    const name = req.body.name;

    if((name !== "")) {
        return DataTypes.insert(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/datatypes');
            }
            else {
                res.status(409).render('datatypes.add.ejs', { serverError: false, error: 'Data already exists!' });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).render('datatypes.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}

exports.viewEditForm = (req, res, next) => {
    const id = req.query.id;

    if((id != "") && (id != null)){
        return DataTypes.fetch(id).then((result)=>{
            if (result.length > 0) {
                res.status(200).render('datatypes.edit.ejs', { result: result, id: id });
            }
            else {
                res.status(204).redirect('/datatypes');
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    }
    else{
        res.status(400).redirect('/datatypes');
    }
}

exports.update = (req, res, next) => {
    const id = req.query.id;
    const name = req.body.name;

    if((id != "") && (id != null)){
        return DataTypes.fetch(id).then((results)=>{
            if((name !== "")){
                return DataTypes.update(req.body).then((result)=>{
                    if (result != null) {
                        res.status(200).redirect('/datatypes');
                    }
                    else {
                        res.status(409).render('datatypes.edit.ejs', { serverError: false, error: 'Unable to update data!', id: id, result: results });
                    }
                }).catch(()=>{
                    res.status(500).render('error', { serverError: true, error: createError(500) });
                });
            }
            else{
                res.status(400).render('datatypes.edit.ejs', { serverError: false, error: 'Input fields cannot be empty.', id: id, result: results });
            }
        }).catch(()=>{
            res.status(500).render('error', { serverError: true, error: createError(500) });
        });
    } 
    else{
        res.status(400).redirect('/datatypes');
    }
}

// exports.delete = (req, res, next) => {
//     const id = req.query.id;

//     if((id != "") && (id != null)){
//         return DataTypes.delete(id).then((result)=>{
//             if (result != null) {
//                 res.status(200).redirect('/datatypes');
//             }
//             else {
//                 res.status(409).redirect('/datatypes');
//             }
//         }).catch(()=>{
//             res.status(500).redirect('/datatypes');
//         });
//     }
//     else{
//         res.status(400).redirect('/datatypes');
//     }
// }