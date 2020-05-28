const db = require('../../utils/database');

module.exports = class Categories {
    static getAllCategories() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_category"))
        }).catch((err) => {
            console.log(err);
        });
    }
};