let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');
const fs = require('fs');
var path = require('path');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminApps Route Test",()=>{
    it("It should perform user login",(done)=>{
        agent
            .post('/login')
            .send({ 
                email: 'test@gmail.com',
                password: 'Test@123' 
            })
            .end((err,res)=>{
                res.should.have.status(200);
                done();
            })
    })
    it("It should GET the link apps",(done)=>{
        agent
        .get('/apps')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/app",(done)=>{
        agent
        .get('/apps/app')
        .query({
            app_id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/add",(done)=>{
        agent
        .get('/apps/add')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/add",(done)=>{
        agent
        .post('/apps/add')
        .field({
            name: 'test1',
            description: 'abc',
            category_id: '2',
            link: 'www.abc.com'
        })
        .attach('icon', fs.readFileSync(path.join(__dirname, '../../../public/images/icon/success.png')), 'success.png')
        .attach('bg', fs.readFileSync(path.join(__dirname, '../../../public/images/icon/success.png')), 'success.png')
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit",(done)=>{
        agent
        .get('/apps/edit')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit",(done)=>{
        agent
        .post('/apps/edit')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            name: 'test1',
            description: 'abc',
            link: 'www.abc.com'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/delete",(done)=>{
        agent
        .get('/apps/delete')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/edit_app",(done)=>{
        agent
        .get('/apps/edit_app')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit_app",(done)=>{
        agent
        .post('/apps/edit_app')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            name: 'test1',
            description: 'abc',
            link: 'www.abc.com'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appcategory",(done)=>{
        agent
        .get('/apps/edit_appcategory')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit_appcategory",(done)=>{
        agent
        .post('/apps/edit_appcategory')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            category_id: '2'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appicon",(done)=>{
        agent
        .get('/apps/edit_appicon')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit_appicon",(done)=>{
        agent
        .post('/apps/edit_appicon')
        .query({
            id: '1'
        })
        .field({
            id: '1'
        })
        .attach('icon', fs.readFileSync(path.join(__dirname, '../../../public/images/icon/success.png')), 'success.png')
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appbg",(done)=>{
        agent
        .get('/apps/edit_appbg')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit_appbg",(done)=>{
        agent
        .post('/apps/edit_appbg')
        .query({
            id: '1'
        })
        .field({
            id: '1'
        })
        .attach('icon', fs.readFileSync(path.join(__dirname, '../../../public/images/icon/success.png')), 'success.png')
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/add_appcontacts",(done)=>{
        agent
        .get('/apps/add_appcontacts')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/add_appcontacts",(done)=>{
        agent
        .post('/apps/add_appcontacts')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            contact_link: 'www.abc.com',
            email_address: 'test@gmail.com',
            first_line: 'abc',
            second_line: 'abc',
            third_line: 'abc',
            fourth_line: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appcontacts",(done)=>{
        agent
        .get('/apps/edit_appcontacts')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/edit_appcontacts",(done)=>{
        agent
        .post('/apps/edit_appcontacts')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            contact_link: 'www.abc.com',
            email_address: 'test@gmail.com',
            first_line: 'abc',
            second_line: 'abc',
            third_line: 'abc',
            fourth_line: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/delete_appcontacts",(done)=>{
        agent
        .get('/apps/delete_appcontacts')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/add_appdatatypes",(done)=>{
        agent
        .get('/apps/add_appdatatypes')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/add_appdatatypes",(done)=>{
        agent
        .post('/apps/add_appdatatypes')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            data_type_id: '2'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/delete_appdatatypes",(done)=>{
        agent
        .get('/apps/delete_appdatatypes')
        .query({
            id: '1',
            data_type_id: '2'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/add_appdatausagepolicy",(done)=>{
        agent
        .get('/apps/add_appdatausagepolicy')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/add_appdatausagepolicy",(done)=>{
        agent
        .post('/apps/add_appdatausagepolicy')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            policy: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appdatausagepolicy",(done)=>{
        agent
        .get('/apps/edit_appdatausagepolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/edit_appdatausagepolicy",(done)=>{
        agent
        .get('/apps/edit_appdatausagepolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .send({
            id: '1',
            policy_id: '2',
            policy: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/delete_appdatausagepolicy",(done)=>{
        agent
        .get('/apps/delete_appdatausagepolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/add_appdataremovalpolicy",(done)=>{
        agent
        .get('/apps/add_appdataremovalpolicy')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link apps/add_appdataremovalpolicy",(done)=>{
        agent
        .post('/apps/add_appdataremovalpolicy')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            policy: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/edit_appdataremovalpolicy",(done)=>{
        agent
        .get('/apps/edit_appdataremovalpolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link apps/edit_appdataremovalpolicy",(done)=>{
        agent
        .get('/apps/edit_appdataremovalpolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .send({
            id: '1',
            policy_id: '2',
            policy: 'abc'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(409);
                }
            }
            else {
                res.should.have.status(500);
            }
            done();
        })
    })
    it("It should GET the link apps/delete_appdataremovalpolicy",(done)=>{
        agent
        .get('/apps/delete_appdataremovalpolicy')
        .query({
            id: '1',
            policy_id: '2'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET wrong link and render 404 page",(done)=>{
        agent
        .get('/apps/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();