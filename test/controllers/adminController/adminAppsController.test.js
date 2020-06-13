const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
const Model = require("../../../models/adminModel/adminAppsModel");
const controller = require("../../../controllers/adminController/adminAppsController");

describe('Test Apps Controller - viewAll', function() {
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


describe('Test Apps Controller - viewEditForm', function() {
    it('viewEditForm', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(validReqObj.query.id);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - update', function() {
    it('update', function() {
        const validReqObj = {
            body: {
                id: "1",
                name: "Test 1",
                description: "abcd",
                link: "www.abc.com"
            },
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.body)
            .resolves(validReqObj.body);

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


describe('Test Apps Controller - delete', function() {
    it('delete', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const mock = sinon.mock(Model);
        mock.expects("delete").withArgs(validReqObj.query.id)
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

        return controller.delete(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


// describe('Test Apps Controller - insert', function() {
//     it('insert', function() {
//         const validReqObj = {
//             body: {
//                 name: "Test 1",
//                 description: "abcd",
//                 category_id: "1",
//                 link: "www.abc.com"
//             }
//         };

//         const mock = sinon.mock(Model);
//         mock.expects("insert").withArgs(validReqObj.body, "www.aa.com", "www.bb.com")
//             .resolves(validReqObj.body, "www.aa.com", "www.bb.com");

//         const validRes = {
//             status: function(statusCode) {
//                 sinon.assert.match(statusCode, 200);

//                 return {
//                     status: sinon.stub(),
//                     redirect: sinon.spy()
//                 };
//             }
//         };

//         return controller.insert(validReqObj, validRes).then(function() {
//             mock.restore();
//             mock.verify();
//         });
//     });
// });