const db = require('../../utils/database');

module.exports = class Users {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_common_user ORDER BY common_user_id DESC"))
        }).catch((err) => {
            console.log(err);
        });
    }

    static blockUser(id) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_common_user SET permitted = ? WHERE common_user_id = ?", ['no', id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static unblockUser(id) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_common_user SET permitted = ? WHERE common_user_id = ?", ['yes', id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};

