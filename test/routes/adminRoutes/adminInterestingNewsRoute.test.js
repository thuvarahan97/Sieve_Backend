let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminInterestingNews Route Test",()=>{
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
    it("It should GET the link interesting_news",(done)=>{
        agent
        .get('/interesting_news')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link interesting_news/add",(done)=>{
        agent
        .get('/interesting_news/add')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link interesting_news/add",(done)=>{
        agent
        .post('/interesting_news/add')
        .send({
            title: 'test1',
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
    it("It should GET the link interesting_news/edit",(done)=>{
        agent
        .get('/interesting_news/edit')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link interesting_news/edit",(done)=>{
        agent
        .post('/interesting_news/edit')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            title: 'test1',
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
    it("It should GET the link interesting_news/delete",(done)=>{
        agent
        .get('/interesting_news/delete')
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
        .get('/interesting_news/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();