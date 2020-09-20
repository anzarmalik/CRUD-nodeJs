const quoteTable = require('../../src/model/entities/quote');

module.exports = {
  async add() {
    const getFindAll = [{
      id: 1,
      author: 'SOME_AUTHOR',
      tag: 'SOME_TAG',
      quote: 'SOME_QUOTE',
      createdAt: '2020-09-01T14:10:20.000Z',
      updatedAt: '2020-09-02T09:43:15.000Z',
    }];

    const getFindAlltwo = []

    quoteTable.findAll.mockResolvedValueOnce(getFindAll);
    quoteTable.findAll.mockResolvedValueOnce(getFindAlltwo);
    global.getFindAll = getFindAll;
  },

  async remove() {
    quoteTable.findAll.mockReset();
    delete global.getFindAll;
  },
};
