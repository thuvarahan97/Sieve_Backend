const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminPrivacyLawsModel");
const controller = require("../../../controllers/adminController/adminPrivacyLawsController");
const { render } = require("ejs");
const Admin = require("../../../models/adminModel/adminModel");

describe('Test Privacy_law Controller - viewAll', function() {
    it('viewAll', function() {
        const validReqObj = {
            // body: {

            // },
            // query: {

            // }
        };

        const mock = sinon.mock(Model);
        mock.expects("getAllData")
            .resolves();

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewAll(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Privacy Law Controller - insert', function() {
    it('insert', function() {
        const validReqObj = {
            body: {
                title: "Test 1",
                description: "Description",
                link:"Link"
                
            },
            session: {
                admin: new Admin({admin_id: 1, email: "meenusivarasan@gmail.com", privilege_level: "1"})
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body,validReqObj.session.admin.id)
            .resolves('success');

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy(),
                    render:sinon.spy()
                };
            }
        };

        return controller.insert(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Privacy_law Controller - viewEditForm', function() {
    it('viewEditForm', function() {
        const validReqObj = {
            // body: {

            // },
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(validReqObj.query.id);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Privacy_Law Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            body: {
                title: "Test 1",
                description: "description",
                link:"link"
            },
            // query: {
            //     id: "1"
            // }
        };

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.body)
            .resolves(validReqObj.body);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy()
                };
            }
        };

        return controller.update(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Privacy_law Controller - delete', function() {
    it('delete', function() {
        const validReqObj = {
            // body: {

            // },
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("delete").withArgs(validReqObj.query.id)
            .resolves(validReqObj.query.id);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy()
                };
            }
        };

        return controller.delete(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});