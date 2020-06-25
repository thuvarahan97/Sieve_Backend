const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminAdminsModel");
const controller = require("../../../controllers/adminController/adminAdminsController");

describe('Test admin Controller - viewAll', function() {
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
describe('Test admins Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            // body: {

            // },
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.query.id)
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

        return controller.update(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});
describe('Test admins Controller - update_no', function() {
    it('update_no', function() {
        const validReqObj = {
            // body: {

            // },
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("update_no").withArgs(validReqObj.query.id)
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

        return controller.update_no(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});