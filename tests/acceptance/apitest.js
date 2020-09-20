const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
chai.use(chaiHttp);
const server = require('../../config/index');
const QuoteTable = require('../../model/entities/quote');

// parent block
describe('Quotes', () => {
  describe('/GET', () => {
    it('it should GET all the quotes', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          (res).should.have.status(200);
          (res.body).should.be.a('array');
          done();
        });
    });
  });

  describe('/POST', () => {
    it('it should  POST a quote author and tag', (done) => {
      const obj = {
        quote: 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
        author: 'Jalludin Rumi',
        tag: '#Wisdom',
      };
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
      const obj = {
        quote: 'Raise your words, not voice. It is rain that grows flowers, not thunder.',
        author: 'Rumi',
        tag: '#Peace',
      };
      QuoteTable.create(obj).then((result) => {
        chai.request(server)
          .put('/')
          .send({
            quote: 'Raise your words, not voice',
            author: 'Rumi',
            tag: '#Love',
            id: result.id,
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      }).catch((err) => {
        console.log(err);
      });
    });
  });

  describe('/DELETE/?id', () => {
    it('it should delete a row on a given  id', (done) => {
      const obj = ({
        quote: 'Sell your cleverness and buy bewilderment.',
        author: 'Mahatma Gandhi',
        tag: '#people',
      });
      QuoteTable.create(obj).then((result) => {
        chai.request(server)
          .delete(`/?id=${result.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
});
