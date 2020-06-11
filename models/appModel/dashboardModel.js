const db = require('../../utils/database');

module.exports = class Dashboard {
    constructor(params) {
        this.app_id = params.app_id,
            this.appName = params.app_name,
            this.iconImage = params.icon_image,
            this.categoryName = params.category_name,
            this.dCount=params.d_count
    }


static getDashboardFromId(id) {
    return new Promise((resolve) => {
        resolve(db.query("SELECT * FROM view_dashboard WHERE app_id = ?", [id]))
    }).then(value => {
        const detail = value[0];
        return new Dashboard(detail);
    }).catch((err) => {
        console.log(err);
    });
}

static getAllDashboard() {
    return new Promise((resolve) => {
        resolve(db.query("SELECT * FROM view_dashboard"))
    }).catch((err) => {
        console.log(err);
    });
}

};