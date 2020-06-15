const db = require('../../utils/database');

module.exports = class DataTypes {

    static getAllData() {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_data_type ORDER BY data_type_name ASC"));
        }).catch((err) => {
            console.log(err);
        });
    }

    static insert(input) {
        return new Promise((resolve) => {
            resolve(db.query("INSERT INTO tbl_data_type (data_type_name) VALUES (?)", [input.name]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static fetch(id) {
        return new Promise((resolve) => {
            resolve(db.query("SELECT * FROM tbl_data_type WHERE data_type_id = ?", [id]));
        }).catch((err) => {
            console.log(err);
        });
    }

    static update(input) {
        return new Promise((resolve) => {
            resolve(db.query("UPDATE tbl_data_type SET data_type_name = ? WHERE data_type_id = ?", [input.name, input.id]));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    // static delete(id) {
    //     return new Promise((resolve) => {
    //         resolve(db.query("DELETE FROM tbl_data_type WHERE data_type_id = ?", [id]));
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }
};

