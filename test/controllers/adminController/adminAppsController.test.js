const sinon = require("sinon");
var chai = require('chai');
var expect = chai.expect;
var httpMocks = require('node-mocks-http');
const Model = require("../../../models/adminModel/adminAppsModel");
const controller = require("../../../controllers/adminController/adminAppsController");
const Categories = require("../../../models/adminModel/adminCategoriesModel");

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


describe('Test Apps Controller - viewAddForm', function() {
    it('viewAddForm', function() {
        const validReqObj = {};

        const mock = sinon.mock(Categories);
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

        return controller.viewAddForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - insert', function() {
    it('insert', function() {
        const validReqObj = httpMocks.createRequest({
            body: {
                name: "Test 1",
                description: "abcd",
                category_id: "1",
                link: "www.abc.com"
            },
            files: [
                {
                    filename: 'test1.png'
                },
                {
                    filename: 'test2.png'
                }
            ],
            protocol: 'http',
            headers: { 
                host: 'localhost:8000'
            }
        });

        const icon_link = 'http://localhost:8000/images/uploads/test1.png';
        const bg_link = 'http://localhost:8000/images/uploads/test2.png';
        
        const mock = sinon.mock(Model);
        mock.expects("insert").withArgs(validReqObj.body, icon_link, bg_link)
            .resolves('success');

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy()
                };
            }
        };

        return controller.insert(validReqObj, validRes).then(function() {
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

        const resultObj = [
            {
                id: 1,
                name: "test 1"
            }
        ];

        const mock = sinon.mock(Model);
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

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

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.body)
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

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("delete").withArgs(validReqObj.query.id)
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

        return controller.delete(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppForm', function() {
    it('viewEditAppForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateApp', function() {
    it('updateApp', function() {
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

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("update").withArgs(validReqObj.body)
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

        return controller.updateApp(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppCategoryForm', function() {
    it('viewEditAppCategoryForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetchAppCategory").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppCategoryForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppCategory', function() {
    it('updateAppCategory', function() {
        const validReqObj = {
            body: {
                id: "1",
                category_id: "1"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("updateAppCategory").withArgs(validReqObj.body)
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

        return controller.updateAppCategory(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppIconForm', function() {
    it('viewEditAppIconForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppIconForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppIcon', function() {
    it('updateAppIcon', function() {
        const validReqObj = httpMocks.createRequest({
            body: {
                id: "1"
            },
            query: {
                id: "1"
            },
            files: [
                {
                    filename: 'test1.png'
                }
            ],
            protocol: 'http',
            headers: { 
                host: 'localhost:8000'
            }
        });

        const icon_link = 'http://localhost:8000/images/uploads/test1.png';

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("updateAppIcon").withArgs(validReqObj.body, icon_link)
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

        return controller.updateAppIcon(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppBGForm', function() {
    it('viewEditAppBGForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppBGForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppBG', function() {
    it('updateAppBG', function() {
        const validReqObj = httpMocks.createRequest({
            body: {
                id: "1"
            },
            query: {
                id: "1"
            },
            files: [
                {
                    filename: 'test2.png'
                }
            ],
            protocol: 'http',
            headers: { 
                host: 'localhost:8000'
            }
        });

        const bg_link = 'http://localhost:8000/images/uploads/test2.png';

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("updateAppBG").withArgs(validReqObj.body)
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

        return controller.updateAppBG(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewAddAppContactsForm', function() {
    it('viewAddAppContactsForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewAddAppContactsForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - insertAppContacts', function() {
    it('insertAppContacts', function() {
        const validReqObj = {
            body: {
                contact_link: "www.abc.com",
                email_address: "abc@gmail.com",
                first_line: "abc",
                second_line: "abc",
                third_line: "abc",
                fourth_line: "abc"
            },
            query: {
                id: "1"
            }
        };
        
        const mock = sinon.mock(Model);
        mock.expects("insertAppContacts").withArgs(validReqObj.body)
            .resolves('success');

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    redirect: sinon.spy()
                };
            }
        };

        return controller.insertAppContacts(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppContactsForm', function() {
    it('viewEditAppContactsForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetchAppContacts").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppContactsForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppContacts', function() {
    it('updateAppContacts', function() {
        const validReqObj = {
            body: {
                id: "1",
                contact_link: "www.abc.com",
                email_address: "abc@gmail.com",
                first_line: "abc",
                second_line: "abc",
                third_line: "abc",
                fourth_line: "abc"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};
        
        const mock = sinon.mock(Model);
        mock.expects("updateAppContacts").withArgs(validReqObj.body)
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

        return controller.updateAppContacts(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - deleteAppContacts', function() {
    it('deleteAppContacts', function() {
        const validReqObj = {
            query: {
                id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("deleteAppContacts").withArgs(validReqObj.query.id)
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

        return controller.deleteAppContacts(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewAddAppDataTypesForm', function() {
    it('viewAddAppDataTypesForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewAddAppDataTypesForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - insertAppDataTypes', function() {
    it('insertAppDataTypes', function() {
        const validReqObj = {
            body: {
                id: "1",
                data_type_id: "1"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};
        
        const mock = sinon.mock(Model);
        mock.expects("insertAppDataTypes").withArgs(validReqObj.body)
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

        return controller.insertAppDataTypes(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - deleteAppDataTypes', function() {
    it('deleteAppDataTypes', function() {
        const validReqObj = {
            query: {
                id: "1",
                data_type_id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("deleteAppDataTypes").withArgs(validReqObj.query.id, validReqObj.query.data_type_id)
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

        return controller.deleteAppDataTypes(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewAddAppDataUsagePolicyForm', function() {
    it('viewAddAppDataUsagePolicyForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewAddAppDataUsagePolicyForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - insertAppDataUsagePolicy', function() {
    it('insertAppDataUsagePolicy', function() {
        const validReqObj = {
            body: {
                id: "1",
                policy: "abc"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};
        
        const mock = sinon.mock(Model);
        mock.expects("insertAppDataUsagePolicy").withArgs(validReqObj.body)
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

        return controller.insertAppDataUsagePolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppDataUsagePolicyForm', function() {
    it('viewEditAppDataUsagePolicyForm', function() {
        const validReqObj = {
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = [
            {
                id: 1,
                name: "test 1"
            }
        ];

        const mock = sinon.mock(Model);
        mock.expects("fetchAppDataUsagePolicy").withArgs(validReqObj.query.id, validReqObj.query.policy_id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppDataUsagePolicyForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppDataUsagePolicy', function() {
    it('updateAppDataUsagePolicy', function() {
        const validReqObj = {
            body: {
                policy: "abc"
            },
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("updateAppDataUsagePolicy").withArgs(validReqObj.body)
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

        return controller.updateAppDataUsagePolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - deleteAppDataUsagePolicy', function() {
    it('deleteAppDataUsagePolicy', function() {
        const validReqObj = {
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("deleteAppDataUsagePolicy").withArgs(validReqObj.query.policy_id)
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

        return controller.deleteAppDataUsagePolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewAddAppDataRemovalPolicyForm', function() {
    it('viewAddAppDataRemovalPolicyForm', function() {
        const validReqObj = {
            query: {
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
        mock.expects("fetch").withArgs(validReqObj.query.id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewAddAppDataRemovalPolicyForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - insertAppDataRemovalPolicy', function() {
    it('insertAppDataRemovalPolicy', function() {
        const validReqObj = {
            body: {
                id: "1",
                policy: "abc"
            },
            query: {
                id: "1"
            }
        };

        const resultObj = {};
        
        const mock = sinon.mock(Model);
        mock.expects("insertAppDataRemovalPolicy").withArgs(validReqObj.body)
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

        return controller.insertAppDataRemovalPolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewEditAppDataRemovalPolicyForm', function() {
    it('viewEditAppDataRemovalPolicyForm', function() {
        const validReqObj = {
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = [
            {
                id: 1,
                name: "test 1"
            }
        ];

        const mock = sinon.mock(Model);
        mock.expects("fetchAppDataRemovalPolicy").withArgs(validReqObj.query.id, validReqObj.query.policy_id)
            .resolves(resultObj);

        const validRes = {
            status: function(statusCode) {
                sinon.assert.match(statusCode, 200);

                return {
                    status: sinon.stub(),
                    render: sinon.spy()
                };
            }
        };

        return controller.viewEditAppDataRemovalPolicyForm(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - updateAppDataRemovalPolicy', function() {
    it('updateAppDataRemovalPolicy', function() {
        const validReqObj = {
            body: {
                policy: "abc"
            },
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("updateAppDataRemovalPolicy").withArgs(validReqObj.body)
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

        return controller.updateAppDataRemovalPolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - deleteAppDataRemovalPolicy', function() {
    it('deleteAppDataRemovalPolicy', function() {
        const validReqObj = {
            query: {
                id: "1",
                policy_id: "1"
            }
        };

        const resultObj = {};

        const mock = sinon.mock(Model);
        mock.expects("deleteAppDataRemovalPolicy").withArgs(validReqObj.query.policy_id)
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

        return controller.deleteAppDataRemovalPolicy(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});


describe('Test Apps Controller - viewApp', function() {
    it('viewApp', function() {
        const validReqObj = {
            query: {
                app_id: "1"
            }
        };

        const resultObj = [
            {
                id: 1,
                name: "test 1"
            }
        ];

        const mock = sinon.mock(Model);
        mock.expects("getAppData").withArgs(validReqObj.query.app_id)
            .resolves(resultObj);

        mock.expects("getAllDataTypes").withArgs(validReqObj.query.app_id)
            .resolves();
        
        mock.expects("getAllDataUsage").withArgs(validReqObj.query.app_id)
            .resolves();

        mock.expects("getAllDataRemoval").withArgs(validReqObj.query.app_id)
            .resolves();
        
        mock.expects("getAllContacts").withArgs(validReqObj.query.app_id)
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

        return controller.viewApp(validReqObj, validRes).then(function() {
            mock.restore();
            mock.verify();
        });
    });
});