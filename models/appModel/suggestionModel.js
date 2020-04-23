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
            resolve(db.query("INSERT INTO tbl_suggestion (s_id, suggestion) VALUES (?,?)",
                ["8",
                    userInput.suggestion]));
            resolve(db.query("INSERT INTO tbl_common_user_suggestion (common_user_id, s_id) VALUES (?,?)",
                [userInput.userId,
                    "8"]));
        }).catch((err) => {
            console.log(err);
        });

    }

};

