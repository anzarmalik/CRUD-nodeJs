const { getQuote } = require('../../src/model/use-cases');
const fixtures = require('../fixtures/use-case.unit.js');

describe('User Case tests', () => {
  beforeAll(async () => {
    await fixtures.add();
  });

  afterAll(async () => {
    await fixtures.remove();
  });

  it('Getting quote details', async () => {
    const data = await getQuote();
    console.log(data, global.getFindAll)
    expect(global.getFindAll).toEqual(data);
  });
});

// test('Getting quotes details', async () => {
//   const data = await getQuote();
//   expect
//   expect(data).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({}),
//     ]),
//   );
// });

// test('Inserting quotes details', async () => {
//   const obj = {
//     author: 'hakeem',
//     quote: 'one apple a day keeps doctors away',
//     tag: '#doctor',
//   };
//   const output = await insertQuote(obj);
//   expect(output).toEqual(
//     expect.objectContaining({
//       quote: 'one apple a day keeps doctors away',
//       author: 'hakeem',
//       tag: '#doctor',
//     }),
//   );
// });

// test('updating quotes details', async () => {
//   const obj = {
//     author: 'carl david',
//     quote: 'two apple a day keeps doctors not away',
//   };
//   const id = '148';
//   const output = await updateQuote(obj, id);
//   expect(output).toEqual(
//     expect.arrayContaining([1]),
//   );
// });

// test('deleting quotes details', async () => {
//   const id = '146';
//   const output = await deleteQuote(id);
//   expect(output).toEqual(1);
// });

// test('Getting quotes details in controllers', async () => {
//   const data = await get();
//   console.log("=================================");
//   console.log(data);
//   console.log("=================================");

//   expect(data).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({}),
//     ]),
//   );
// });

// describe('GET Quotes', () => {
//   it('respond with json', (done) => {
//     request(app)
//       .get('/')
//       .end((err, res) => {
//         console.log('============res============');
//         console.log(res);
//         console.log('============res============');

//         if (err) return done(err);
//         done();
//       });
//   });
// });

// describe('basic route tests', () => {
//   test('get quotes route GET /', async () => {
//     const routes = express.Router();
//     const response = await request(app).get('/', (res) => res.status(200));
//     console.log('============response============');
//     console.log(response);
//     console.log('============response============');
//     // expect(response.status).toEqual(200);
//   // expect(response.text).toContain('Hello World!');
//   });
// });
