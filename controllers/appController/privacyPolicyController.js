const PrivacyPolicy = require('../../models/appModel/privacyPolicyModel');

exports.view_all = (req, res, next) => {
    const fetchDataTypes = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataTypes(req.body.id)));
        });
    };

    const fetchDataUsage = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataUsage(req.body.id)));
        });
    };

    const fetchDataRemoval = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataRemoval(req.body.id)));
        });
    };

    const fetchContacts = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllContacts(req.body.id)));
        });
    };

    fetchDataTypes().then((types) => {
        console.log(types[0]);
        fetchDataUsage().then((usages) => {
            console.log(usages[0]);
            fetchDataRemoval().then((removals) => {
                console.log(removals[0]);
                fetchContacts().then((contacts) => {
                    console.log(types);
                    console.log(usages);
                    console.log(removals);
                    res.json({
                        types: types,
                        usages: usages,
                        removals: removals,
                        contact_link: contacts[0].contact_link,
                        email: contacts[0].email_address,
                        first_line: contacts[0].first_line,
                        second_line: contacts[0].second_line,
                        third_line: contacts[0].third_line,
                        fourth_line: contacts[0].fourth_line
                    });
                }).catch((err) => {
                    if (err) {
                        res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                    }
                });
            }).catch((err) => {
                if (err) {
                    res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                }
            });
        }).catch((err) => {
            if (err) {
                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
            }
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.view_all2 = (req, res, next) => {
    const fetchDataTypes = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataTypes('1')));
        });
    };

    const fetchDataUsage = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataUsage('1')));
        });
    };

    const fetchDataRemoval = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllDataRemoval('1')));
        });
    };

    const fetchContacts = () => {
        return new Promise((resolve, reject) => {
            resolve((PrivacyPolicy.getAllContacts('1')));
        });
    };

    fetchDataTypes().then((types) => {
        console.log(types[0]);
        fetchDataUsage().then((usages) => {
            console.log(usages[0]);
            fetchDataRemoval().then((removals) => {
                console.log(removals[0]);
                fetchContacts().then((contacts) => {
                    console.log(contacts);
                    res.json({
                        types: types,
                        usages: usages,
                        removals: removals,
                        contact_link: contacts[0].contact_link,
                        email: contacts[0].email_address,
                        first_line: contacts[0].first_line,
                        second_line: contacts[0].second_line,
                        third_line: contacts[0].third_line,
                        fourth_line: contacts[0].fourth_line
                    });
                }).catch((err) => {
                    if (err) {
                        res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                    }
                });
            }).catch((err) => {
                if (err) {
                    res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
                }
            });
        }).catch((err) => {
            if (err) {
                res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
            }
        });
    }).catch((err) => {
        if (err) {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' });
        }
    });
}

exports.user_signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password
    if ((validation.emailValidation(email)) && (validation.passwordValidation(password))) {
        User.insert(req.body).then(() => {
            res.status(200).json({ success: true });
        }).catch(() => {
            res.status(404).json({ serverError: true, error: 'Database Connection Faliure!' })
        });
    } else {
        res.status(404).json({ serverError: false, error: 'Incorrect Email or Password' });
    }

}