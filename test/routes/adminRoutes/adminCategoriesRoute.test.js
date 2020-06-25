let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("adminCategories Route Test",()=>{
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
    it("It should GET the link categories",(done)=>{
        agent
        .get('/categories')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET the link categories/add",(done)=>{
        agent
        .get('/categories/add')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link categories/add",(done)=>{
        agent
        .post('/categories/add')
        .send({
            name: 'test1',
            icon: 'abc'
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
    it("It should GET the link categories/edit",(done)=>{
        agent
        .get('/categories/edit')
        .query({
            id: '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should POST the link categories/edit",(done)=>{
        agent
        .post('/categories/edit')
        .query({
            id: '1'
        })
        .send({
            id: '1',
            name: 'test1',
            icon: 'abc'
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
    it("It should GET the link categories/delete",(done)=>{
        agent
        .get('/categories/delete')
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
        .get('/categories/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();