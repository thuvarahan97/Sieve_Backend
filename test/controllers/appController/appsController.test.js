const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/appModel/appsModel");
const controller = require("../../../controllers/appController/appsController");

describe('Test App - Apps Controller - view_all', function() {
    it('view_all', function() {
        const validReqObj = {
            body: {
                category_id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("getAllApps").withArgs(validReqObj.body.category_id)
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

describe('Test App - Apps Controller - view_all_search', function() {
    it('view_all_search', function() {
        const validReqObj = {};

        const mock = sinon.mock(Model);
        mock.expects("getAllAppsForSearch")
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

        return controller.view_all_search(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});