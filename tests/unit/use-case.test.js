const {
  getQuote, insertQuote, updateQuote, deleteQuote,
} = require('../../src/model/use-cases');
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
    expect(global.getFindAll).toEqual(data);
  });

  it('Inserting quote details', async () => {
    const data = await insertQuote();
    expect(global.getCreate).toEqual(data);
  });

  it('Updating quote details', async () => {
    const data = await updateQuote();
    expect(global.getUpdate).toEqual(data);
  });

  it('Deleting quote details', async () => {
    const data = await deleteQuote();
    expect(global.getDelete).toEqual(data);
  });
});
