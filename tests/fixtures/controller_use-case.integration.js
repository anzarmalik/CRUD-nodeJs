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

    const getCreate = {
      id: 1,
      author: 'SOME_AUTHOR',
      tag: 'SOME_TAG',
      quote: 'SOME_QUOTE',
      createdAt: '2020-09-01T14:10:20.000Z',
      updatedAt: '2020-09-02T09:43:15.000Z',
    };

    const getUpdate = [1];
    const getDelete = 1;

    quoteTable.findAll.mockResolvedValue(getFindAll);
    quoteTable.create.mockResolvedValue(getCreate);
    quoteTable.update.mockResolvedValue(getUpdate);
    quoteTable.destroy.mockResolvedValue(getDelete);

    global.getFindAll = getFindAll;
    global.getCreate = getCreate;
    global.getUpdate = getUpdate;
    global.getDelete = getDelete;
  },

  async remove() {
    quoteTable.findAll.mockReset();
    quoteTable.create.mockReset();
    quoteTable.update.mockReset();
    quoteTable.destroy.mockReset();

    delete global.getFindAll;
    delete global.getCreate;
    delete global.getUpdate;
    delete global.getDelete;
  },
};
