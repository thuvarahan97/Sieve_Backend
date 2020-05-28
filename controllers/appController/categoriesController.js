const Categories = require('../../models/appModel/categoriesModel');

exports.view_all = (req, res, next) => {
    Categories.getAllCategories().then((categories)=>{
        res.json({
            categories: categories
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}