let chai=require("chai");
let chaiHttp=require("chai-http");
let server = require('../../../app');

chai.should();
chai.use(chaiHttp);

describe("adminDataTypes Route Test",()=>{
    it("It should GET the Link datatypes",(done)=>{
        chai.request(server)
        .get('/datatypes')
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should GET the Link datatypes/add",(done)=>{
        chai.request(server)
        .get('/datatypes/add')
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should POST the Link datatypes/add",(done)=>{
        chai.request(server)
        .post('/datatypes/add')
        .send({
            'name': 'test1'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                    res.should.redirect;
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
    it("It should GET the Link datatypes/edit",(done)=>{
        chai.request(server)
        .get('/datatypes/edit')
        .query({
            'id': '1'
        })
        .end((err,res)=>{
            res.should.have.status(200);
        done();
        })
    })
    it("It should POST the Link datatypes/edit",(done)=>{
        chai.request(server)
        .post('/datatypes/edit')
        .query({
            'id': '1'
        })
        .send({
            'name': 'test1'
        })
        .end((err,res)=>{
            if (!err) {
                if (!res.error) {
                    res.should.have.status(200);
                    res.should.redirect;
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
    it("It should GET wrong link",(done)=>{
        chai.request(server)
        .get('/datatypes/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
        done();
        })
    })
})