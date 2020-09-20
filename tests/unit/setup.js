const database = require('../../src/config/db');

database.getInstance = jest.fn();

// global.quoteTable.findAll.mockResolvedValue(getFindAll);
database.getInstance.mockReturnValue({
  define: () => ({
    findAll: jest.fn(), create: jest.fn(), update: jest.fn(), destroy: jest.fn(),
  }),
});

global.database = database;
