let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminPrivacyTips Route Test",()=>{
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
    it("It should GET the link privacy_tips",(done)=>{
        agent
        .get('/privacy_tips')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link privacy_tips/add",(done)=>{
        agent
        .get('/privacy_tips/add')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link privacy_tips/add",(done)=>{
        agent
        .post('/privacy_tips/add')
        .send({
            title: 'test1',
            description: 'abc',
        
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
    it("It should GET the link privacy_tips/edit",(done)=>{
        agent
        .get('/privacy_tips/edit')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link privacy_tips/edit",(done)=>{
        agent
        .post('/privacy_tips/edit')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            title: 'test1',
            description: 'abc',
            
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
    it("It should GET the link privacy_tips/delete",(done)=>{
        agent
        .get('/privacy_tips/delete')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET wrong link and render 404 page",(done)=>{
        agent
        .get('/privacy_tips/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();