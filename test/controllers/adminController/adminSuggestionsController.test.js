const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminSuggestionsModel");
const controller = require("../../../controllers/adminController/adminSuggestionsController");

describe('Test suggestions Controller - viewAll', function() {
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