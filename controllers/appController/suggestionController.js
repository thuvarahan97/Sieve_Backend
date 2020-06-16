const Suggestion = require('../../models/appModel/suggestionModel');

exports.insert = (req, res, next) => {
    const userId = req.body.userId;
    const suggestion = req.body.suggestion;

    if((userId)&&(suggestion)){
        return Suggestion.insert(req.body).then(()=>{
            res.status(200).json({success: true});
        }).catch(()=>{
            res.status(404).json({serverError: true,error: 'Database Connection Faliure!' })
        })
    }else{
        res.status(404).json({ serverError: false, error: 'Invalid Suggestion Format' });
    }
}
