const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/appModel/dashboardModel");
const controller = require("../../../controllers/appController/dashboardController");

describe('Test App - Dashboard Controller - view_all', function() {
    it('view_all', function() {
        const validReqObj = {};

        const mock = sinon.mock(Model);
        mock.expects("getAllDashboard")
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

        return controller.view_all(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});