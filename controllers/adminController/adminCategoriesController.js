const Categories = require('../../models/adminModel/adminCategoriesModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Categories.getAllData()));
        });
    };
    fetchData().then((result)=>{
        res.status(200).render('categories', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.viewAddForm = (req, res, next) => {
    res.render('categories.add.ejs');
}

exports.insert = (req, res, next) => {
    const name = req.body.name;
    const icon = req.body.icon;

    if((name !== "") && (icon !== "")){
        Categories.insert(req.body).then((result)=>{
            if (result != null) {
                res.status(200).redirect('/categories');
            }
            else {
                res.status(404).render('categories.add.ejs', {serverError: false, error: 'Data already exists!'});
            }
        }).catch(()=>{
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        })
    }else{
        res.status(404).render('categories.add.ejs', { serverError: false, error: 'Input fields cannot be empty.' });
    }
}