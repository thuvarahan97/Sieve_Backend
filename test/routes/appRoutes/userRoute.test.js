let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("App - User Route Test",()=>{
    it("It should POST the link app/user/signup",(done)=>{
        agent
        .post('/app/user/signup')
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
                    res.should.have.status(404);
                }
            }
            else {
                res.should.have.status(404);
            }
            done();
        })
    })
    it("It should POST the link app/user/signupGF",(done)=>{
        agent
        .post('/app/user/signupGF')
        .send({
            email: 'test1@gmail.com',
            uid: '1',
            imageUrl: 'www.abc.com'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                }
                else {
                    res.should.have.status(404);
                }
            }
            else {
                res.should.have.status(404);
            }
            done();
        })
    })
    it("It should POST the link app/user/login",(done)=>{
        agent
        .post('/app/user/login')
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
                    res.should.have.status(404);
                }
            }
            else {
                res.should.have.status(404);
            }
            done();
        })
    })
    it("It should GET wrong link and render 404 page",(done)=>{
        agent
        .get('/app/user/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();