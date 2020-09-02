let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("../app");



// parent block
describe("Quotes", () => {

    describe("/GET", () => {
        it("it should GET all the quotes", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a("array");
                    done();
                });
        });
    });



});     