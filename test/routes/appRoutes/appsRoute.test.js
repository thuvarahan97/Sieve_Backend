let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("App - Apps Route Test",()=>{
    it("It should POST the link app/apps/view_all",(done)=>{
        agent
        .post('/app/apps/view_all')
        .send({
            category_id: '1'
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
    it("It should POST the link app/apps/view_all_search",(done)=>{
        agent
        .post('/app/apps/view_all_search')
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        })
    })
    it("It should GET wrong link and render 404 page",(done)=>{
        agent
        .get('/app/apps/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();