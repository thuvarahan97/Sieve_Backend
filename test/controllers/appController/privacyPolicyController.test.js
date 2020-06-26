const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/appModel/privacyPolicyModel");
const controller = require("../../../controllers/appController/privacyPolicyController");

describe('Test App - Privacy Policy Controller - view_all', function() {
    it('view_all', function() {
        const validReqObj = {
            body: {
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
        mock.expects("getAllDataTypes").withArgs(validReqObj.body.id)
            .resolves(resultObj);

        mock.expects("getAllDataUsage").withArgs(validReqObj.body.id)
            .resolves(resultObj);

        mock.expects("getAllDataRemoval").withArgs(validReqObj.body.id)
            .resolves(resultObj);

        mock.expects("getAllContacts").withArgs(validReqObj.body.id)
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

        return controller.view_all(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});