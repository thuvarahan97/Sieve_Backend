let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminUsers Route Test",()=>{
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
    it("It should GET the link users",(done)=>{
        agent
        .get('/users')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link users/block_user",(done)=>{
        agent
        .get('/users/block_user')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link users/unblock_user",(done)=>{
        agent
        .get('/users/unblock_user')
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
        .get('/users/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();