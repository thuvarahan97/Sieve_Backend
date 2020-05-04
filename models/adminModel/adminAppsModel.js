const db = require('../../utils/database');

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
            resolve(db.query("SELECT A.*, C.category_name AS app_category FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id"))
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static getAppData(app_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT A.*, C.category_name AS app_category FROM tbl_application A INNER JOIN tbl_app_category B ON A.app_id = B.app_id INNER JOIN tbl_category C ON B.category_id = C.category_id WHERE A.app_id = ?", [app_id]))
        }).catch((err) => {
            console.log(err);
        });
    }
};

