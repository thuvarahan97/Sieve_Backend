const db = require('../../utils/database');

module.exports = class Categories {
    constructor(params) {
        this.category_id = params.category_id,
        this.category_name = params.category_name,
        this.icon_link = params.icon_link
    }

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_category A LEFT OUTER JOIN (SELECT COUNT(app_id) AS app_count, category_id FROM tbl_app_category GROUP BY (category_id)) B USING (category_id)"));
        }).catch((err) => {
            console.log(err);
        });
    }

    static insert(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_category (category_name, icon_link) VALUES (?,?)", [input.name, input.icon]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetch(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_category WHERE category_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_category SET category_name = ?, icon_link = ? WHERE category_id = ?", [input.name, input.icon, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    static delete(id) {
        return new Promise((resolve) => {
            resolve(db.query("DELETE FROM tbl_category WHERE category_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }
};

