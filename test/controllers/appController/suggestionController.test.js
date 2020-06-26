const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/appModel/suggestionModel");
const controller = require("../../../controllers/appController/suggestionController");

describe('Test App - Suggestion Controller - view_all', function() {
    it('insert', function() {
        const validReqObj = {
            body: {
                userId: "1",
                suggestion: "abc"
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

        return controller.insert(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});