const db = require('../utils/database');

module.exports = class Apps {
    constructor(params) {
        this.app_id = params.app_id,
        this.description = params.description,
        this.icon_image = params.icon_image,
        this.app_name = params.app_name,
        this.privacy_policy_link = params.privacy_policy_link
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_application"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

