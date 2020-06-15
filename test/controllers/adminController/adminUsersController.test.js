const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminUsersModel");
const controller = require("../../../controllers/adminController/adminUsersController");

describe('Test Users Controller - viewAll', function() {
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


describe('Test Users Controller - blockUser', function() {
    it('blockUser', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("blockUser").withArgs(validReqObj.query.id)
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

        return controller.blockUser(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Users Controller - unblockUser', function() {
    it('unblockUser', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("unblockUser").withArgs(validReqObj.query.id)
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

        return controller.unblockUser(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});