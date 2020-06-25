const Categories = require('../../models/appModel/categoriesModel');

exports.view_all = (req, res, next) => {
    return Categories.getAllCategories().then((categories)=>{
        res.status(200).json({
            categories: categories
        });
    }).catch((err) => {
        if (err) {
            res.status(500).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}