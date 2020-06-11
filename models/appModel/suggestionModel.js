const db = require('../../utils/database');
const hashFunctions = require('../../utils/hash_function');

module.exports = class Suggestions {
    constructor(params) {
        this.userId = params.common_user_id,
        this.sId = params.s_id,
        this.suggestion = params.suggestion
    }

    static insert(userInput) {
        return new Promise((resolve) => {
            console.log(userInput);

            resolve(db.query("INSERT INTO tbl_suggestion (user_id,suggestion) VALUES (?,?)",
                [userInput.userId,userInput.suggestion]));
            
        
                
        }).catch((err) => {
            console.log(err);
        });

    }

};

