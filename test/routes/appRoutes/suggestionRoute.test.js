let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../../../app');
let url = require('../../appURL');

chai.should();
chai.use(chaiHttp);

var agent = chai.request.agent(url.server);

describe("App - Suggestion Route Test",()=>{
    it("It should POST the link app/suggestion/insert",(done)=>{
        agent
        .post('/app/suggestion/insert')
        .send({
            userId: '1',
            suggestion: 'abc'
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
        .get('/app/suggestion/not_found_link')
        .end((err,res)=>{
            res.should.have.status(404);
            done();
        })
    })
})

agent.close();