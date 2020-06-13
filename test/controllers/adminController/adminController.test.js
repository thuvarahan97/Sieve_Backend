const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminModel");
const controller = require("../../../controllers/adminController/adminController");

describe('Test Admin Controller - admin_signup', function() {
    it('admin_signup', function() {
        const validReqObj = {
            body: {
                email: "abcd@gmail.com",
                password: "Thuva@123",
                confirmPassword: "Thuva@123"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body)
            .resolves(validReqObj.body);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.admin_signup(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Admin Controller - admin_login', function() {
    it('admin_login', function() {
        const validReqObj = {
            body: {
                email: "abc@gmail.com",
                password: "Thuva@123"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("getAdminFromEmail").withArgs(validReqObj.body.email)
            .resolves(validReqObj.body.email);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 500);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.admin_login(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});
