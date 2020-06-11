const db = require('../../utils/database');

module.exports = class Users {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_common_user ORDER BY common_user_id DESC"))
        }).catch((err) => {
            console.log(err);
        });
    }

    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_common_user WHERE common_user_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};

