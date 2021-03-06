const quoteTable = require('../entities/quote');
const { logger } = require('../../config/logger');

const getQuote = async () => {
  try {
    const getData = await quoteTable.findAll({
      raw: true,
    });
    if (getData) {
      return getData;
    }
    return {};
  } catch (error) {
    logger.error(error);
    return {};
  }
};

const insertQuote = async (data) => {
  try {
    const insertedData = await quoteTable.create(data);
    if (insertedData) {
      return insertedData;
    }
    return null;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const deleteQuote = async (id) => {
  try {
    const deletedData = await quoteTable.destroy({
      where: {
        id,
      },
    });
    if (deletedData == 1) {
      return deletedData;
    }
    return null;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const updateQuote = async (data, id) => {
  try {
    const updatedData = await quoteTable.update(data,
      {
        where: {
          id,
        },
      });
    if (updatedData[0] == 1) {
      return updatedData;
    }
    return null;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

module.exports = {
  getQuote,
  insertQuote,
  deleteQuote,
  updateQuote,
};
