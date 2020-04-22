const db = require('../../utils/database');

module.exports = class Categories {
    constructor(params) {
        this.category_id = params.category_id,
        this.category_name = params.category_name,
        this.icon_link = params.icon_link
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_category"))
        }).catch((err) => {
            console.log(err);
        });
    }
};

