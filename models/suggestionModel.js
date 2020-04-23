const db = require('../utils/database');
const hashFunctions = require('../utils/hash_function');

module.exports = class Suggestion {
    constructor(params) {
        this.userId = params.common_user_id,
            this.sId = params.s_id,
            this.suggestion = params.suggestion
    }

    static insert(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);
            resolve(db.query("INSERT INTO tbl_suggestion (suggestion) VALUES (?)",
                [
                    userInput.suggestion]));
                    const fetchLastId = () => {
                        return new Promise((resolve, reject) => {
                            resolve((Suggestion.selectLastSug()));
                        });
                    };

                    fetchLastId().then((result) => {
                        console.log(result)
                        resolve(db.query("INSERT INTO tbl_common_user_suggestion (common_user_id,s_id) VALUES (?,?)",
                [userInput.userId,result[0].s_id]));
                    });
                    
            
        }).catch((err) => {
            console.log(err);
        });

    }

    static selectLastSug(){
        return new Promise((resolve) => {
            resolve(db.query("SELECT s_id from tbl_suggestion ORDER BY s_id DESC LIMIT 1"))
        }).catch((err) => {
            console.log(err);
        });

    }

};

