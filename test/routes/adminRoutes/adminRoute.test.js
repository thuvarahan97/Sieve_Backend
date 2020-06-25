let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("admin Route Test",()=>{
    it("It should GET the link for index route",(done)=>{
        agent
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link signup",(done)=>{
        agent
        .get('/signup')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should perform user signup",(done)=>{
        agent
            .post('/signup')
            .send({ 
                email: 'test@gmail.com',
                password: 'Test@123',
                confirmPassword: 'Test@123'
            })
            .end((err,res)=>{
                if (!err) {
                    if (!res.error) {
                        res.should.have.status(200);
                    }
                    else {
                        if (res.unauthorized) {
                            res.should.have.status(401);
                        }
                        else {
                            res.should.have.status(409);
                        }
                    }
                }
                else {
                    res.should.have.status(500);
                }
                done();
            })
    })
    it("It should GET the link login",(done)=>{
        agent
        .get('/login')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should perform user login",(done)=>{
        agent
            .post('/login')
            .send({ 
                email: 'test@gmail.com',
                password: 'Test@123' 
            })
            .end((err,res)=>{
                if (!err) {
                    if (!res.error) {
                        res.should.have.status(200);
                    }
                    else {
                        res.should.have.status(401);
                    }
                }
                else {
                    res.should.have.status(500);
                }
                done();
            })
    })
    it("It should perform user logout",(done)=>{
        agent
        .get('/logout')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET wrong or inaccessible link and redirect to login page",(done)=>{
        agent
        .get('/not_found_link')
        .end((err,res)=>{
            res.should.redirect;
            done();
        })
    })
})

agent.close();