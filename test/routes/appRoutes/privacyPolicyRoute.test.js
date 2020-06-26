let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("App - PrivacyPolicy Route Test",()=>{
    it("It should POST the link app/privacy_policy/view_all",(done)=>{
        agent
        .post('/app/privacy_policy/view_all')
        .send({
            id: '1'
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
        .get('/app/privacy_policy/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();