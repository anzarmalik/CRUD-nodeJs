const {
  get, insert, destroy, update,
} = require('../../src/controller');
const fixtures = require('../fixtures/controller_use-case.integration');

describe('Controllers tests', () => {
  beforeAll(async () => {
    await fixtures.add();
  });

  afterAll(async () => {
    await fixtures.remove();
  });

  it('Getting quote details from controllers', async () => {
    const res = {
      send(param) {
        expect(global.getFindAll).toBe(param);
      },
      status(code) {
        expect(200).toBe(code);
      },
    };
    await get({}, res);
  });

  it('Inserting quote details from controllers', async () => {
    const req = {
      body: {
        author: 'SOME_AUTHOR',
        tag: 'SOME_TAG',
        quote: 'SOME_QUOTE',
      },
    };
    const res = {
      send(param) {
        expect(global.getCreate).toBe(param);
      },
      status(code) {
        expect(200).toBe(code);
      },
    };
    await insert(req, res);
  });

  it('Deleting quote details from controllers', async () => {
    const req = {
      query: { id: 1 },
    };
    const res = {
      send(param) {
        expect('Quote deleted successfully').toBe(param);
      },
      status(code) {
        expect(200).toBe(code);
      },
    };
    await destroy(req, res);
  });

  it('Updating quote details from controllers', async () => {
    const req = {
      body: {
        id: 1,
        author: 'SOME_AUTHOR',
        tag: 'SOME_TAG',
        quote: 'SOME_QUOTE',
      },
    };
    const res = {
      send(param) {
        expect('1  Quote Updated successfully').toBe(param);
      },
      status(code) {
        expect(200).toBe(code);
      },
    };
    await update(req, res);
  });
});
