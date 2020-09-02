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

    describe('/POST', () => {
        it('it should  POST a quote author and tag', (done) => {
            let obj = {
                quote: "To hurt human heart is to hurt grace of God",
                author: "Nizamudin auwliya",
                tag: "#humanity"
            }
            chai.request(server)
                .post('/')
                .send(obj)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('author');
                    res.body.should.have.property('quote');
                    res.body.should.have.property('tag');
                    done();
                });
        });

    });




    describe('/PUT', () => {
        it('it should UPDATE a quote or author or tag or all three of them on a given  id', (done) => {
            let obj = {
                quote: "To hurt human heart is to hurt grace of God",
                author: "Nizamudin auwliya",
                tag: "#humanity",
                id: 13
            }
            chai.request(server)
                .put('/')
                .send(obj)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });


    describe('/DELETE/:id', () => {
        it('it should delete a row on a given  id', (done) => {
            chai.request(server)
                .delete("/?id=23")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});     