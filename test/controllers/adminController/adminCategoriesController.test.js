const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminCategoriesModel");
const controller = require("../../../controllers/adminController/adminCategoriesController");

describe('Test Categories Controller - viewAll', function() {
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


describe('Test Categories Controller - insert', function() {
    it('insert', function() {
        const validReqObj = {
            body: {
                name: "Test 1",
                icon: "abcd"
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


describe('Test Categories Controller - viewEditForm', function() {
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


describe('Test Categories Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            body: {
                id: "1",
                name: "Test 1",
                icon: "abcd"
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


describe('Test Categories Controller - delete', function() {
    it('delete', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("delete").withArgs(validReqObj.query.id)
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

        return controller.delete(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});