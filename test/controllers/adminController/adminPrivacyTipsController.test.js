const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminPrivacyTipsModel");
const controller = require("../../../controllers/adminController/adminPrivacyTipsController");
const Admin = require("../../../models/adminModel/adminModel");

describe('Test Privacy_tips Controller - viewAll', function() {
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


describe('Test Privacy tips Controller - insert', function() {
    it('insert', function() {
        const validReqObj = {
            body: {
                title: "Test 1",
                description: "Description"
                // link:"Link"
                
            },
            session: {
                admin:{
                        id:1
                }
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body,1)
            .resolves('success');

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy()
                };
            }
        };

        return controller.insert(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Privacy_tips Controller - viewEditForm', function() {
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


describe('Test Privacy_tips Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            body: {
                title: "Test 1",
                description: "description"
                // link:"link"
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


describe('Test Privacy_tips Controller - delete', function() {
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