const db = require('../utils/database');

module.exports = class Admins {
    constructor(params) {
        this.admin_id = params.admin_id,
        this.email = params.email
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_admin"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

