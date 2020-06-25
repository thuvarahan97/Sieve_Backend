let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminDataTypes Route Test",()=>{
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
    it("It should GET the link datatypes",(done)=>{
        agent
        .get('/datatypes')
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should GET the link datatypes/add",(done)=>{
        agent
        .get('/datatypes/add')
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should POST the link datatypes/add",(done)=>{
        agent
        .post('/datatypes/add')
        .send({
            name: 'test1'
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
    it("It should GET the link datatypes/edit",(done)=>{
        agent
        .get('/datatypes/edit')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should POST the link datatypes/edit",(done)=>{
        agent
        .post('/datatypes/edit')
        .query({
            id: '48'
        })
        .send({
            id: '48',
            name: 'test3'
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
    it("It should GET wrong link and render 404 page",(done)=>{
        agent
        .get('/datatypes/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
        done();
        })
    })
})

agent.close();