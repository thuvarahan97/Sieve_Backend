const db = require('../../utils/database');

module.exports = class Suggestions {
    constructor(params) {
        this.common_user_id = params.common_user_id,
        this.email = params.email
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT common_user_id,suggestion FROM tbl_suggestion,tbl_common_user_suggestion WHERE tbl_suggestion.s_id=tbl_common_user_suggestion.s_id;"))
        }).catch((err) => {
            console.log(err);
        });
    }

    // static delete(id) {
    //     return new Promise((resolve) => {
    //         resolve(db.query("UPDATE tbl_suggestion A  SET A.deleted = 'True' WHERE B._id = ?", [id]));
    //         // resolve(db.query("UPDATE tbl_content A INNER JOIN tbl_privacy_tip B USING (content_id) SET A.deleted = 'True' WHERE B.pt_id = ?", [id]));
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }

};

