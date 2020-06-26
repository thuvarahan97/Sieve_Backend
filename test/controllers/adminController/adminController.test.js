const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const controller = require("../../../controllers/adminController/adminController");
const Admin = require("../../../models/adminModel/adminModel");
const hashFunctions = require('../../../utils/hash_function');

describe('Test Admin Controller - admin_signup', function() {
    it('admin_signup', function() {
        const validReqObj = {
            body: {
                email: "abcd@gmail.com",
                password: "Thuva@123",
                confirmPassword: "Thuva@123"
            }
        };

        const mock = sinon.mock(Admin);
        mock.expects("insert").withArgs(validReqObj.body)
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
                password: "abc123"
            },
            session: {
                loggedin: null,
                admin: null
            }
        };

        const resultObj = {
            admin: new Admin({admin_id: 1, email: "abc@gmail.com", privilege_level: "1"}),
            password: hashFunctions.encrypt("abc123"),
            permitted: "yes"
        }

        const mock = sinon.mock(Admin);
        mock.expects("getAdminFromEmail").withArgs(validReqObj.body.email)
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

        return controller.admin_login(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});
