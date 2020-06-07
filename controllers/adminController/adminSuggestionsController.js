const Suggestions = require('../../models/adminModel/adminSuggestionsModel');

exports.viewAll = (req, res, next) => {
    const fetchData =  () => {
        return new Promise((resolve, reject) => {
            resolve((Suggestions.getAllData()));
        });
    };
    fetchData().then((result)=>{
        res.status(200).render('suggestions', { result: result });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

//updated suggestion delete

// exports.delete = (req, res, next) => {
//     const id = req.query.id;

//     if((id != "") && (id != null)){
//         Suggestions.delete(id).then((result)=>{
//             if (result != null) {
//                 res.status(404).redirect('/suggestion');
//             }
//             else {
//                 res.status(404).redirect('/suggestion');
//             }
//         }).catch(()=>{
//             res.status(404).redirect('/suggestion');
//         });
//     }
//     else{
//         res.status(404).redirect('/suggestion');
//     }
// }