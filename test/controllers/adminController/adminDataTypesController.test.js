const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminDataTypesModel");
const controller = require("../../../controllers/adminController/adminDataTypesController");

describe('Test Data Types Controller - viewAll', function() {
    it('viewAll', function() {
        const validReqObj = {};

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


describe('Test Data Types Controller - insert', function() {
    it('insert', function() {
        const validReqObj = {
            body: {
                name: "Test 1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body)
            .resolves(resultObj);

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


describe('Test Data Types Controller - viewEditForm', function() {
    it('viewEditForm', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const resultObj = [
            {
                id: 1,
                name: "test 1"
            }
        ];

        const mock = sinon.mock(Model);
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

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


describe('Test Data Types Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            body: {
                id: "1",
                name: "Test 1"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.body)
            .resolves(resultObj);

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