const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/appModel/userModel");
const controller = require("../../../controllers/appController/userController");
const hashFunctions = require('../../../utils/hash_function');

describe('Test App - User Controller - user_signup', function() {
    it('user_signup', function() {
        const validReqObj = {
            body: {
                email: "abcd@gmail.com",
                password: "Test@123"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body)
            .resolves();

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    json: sinon.spy()
                };
            }
        };

        return controller.user_signup(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test App - User Controller - user_login', function() {
    it('user_login', function() {
        const validReqObj = {
            body: {
                email: "abcd@gmail.com",
                password: "Test@123"
            }
        };

        const resultObj = new Model({common_user_id: 1, email: "abcd@gmail.com", password: hashFunctions.encrypt("Test@123"), imageUrl: "www.img.com", uid: 1, permitted: "yes"});

        const mock = sinon.mock(Model);
        mock.expects("getUserFromEmail").withArgs(validReqObj.body.email)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    json: sinon.spy()
                };
            }
        };

        return controller.user_login(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});
