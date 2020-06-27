const Suggestions = require('../../models/adminModel/adminSuggestionsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Suggestions.getAllData()));
        });
    };
    return fetchData().then((result)=>{
        res.status(200).render('suggestions', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(500).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}