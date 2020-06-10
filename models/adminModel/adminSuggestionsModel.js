const db = require('../../utils/database');

module.exports = class Suggestions {
    constructor(params) {
        this.common_user_id = params.common_user_id,
        this.email = params.email
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT common_user_id,suggestion FROM tbl_suggestion,tbl_common_user_suggestion WHERE tbl_suggestion.s_id=tbl_common_user_suggestion.s_id ;"))
        }).catch((err) => {
            console.log(err);
        });
    }
    

};

