const db = require('../../utils/database');

module.exports = class Apps {
    static getAllApps(category_id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM view_app_categories WHERE category_id = ?", [category_id]))
        }).catch((err) => {
            console.log(err);
        });
    }

    static getAllAppsForSearch() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM view_app_categories"))
        }).catch((err) => {
            console.log(err);
        });
    }
};