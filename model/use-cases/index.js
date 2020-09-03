const quoteTable = require('../entities/quote');

module.exports.getQuote = async () => {
  try {
    const getData = await quoteTable.findAll({
      raw: true,
    });
    if (getData) {
      return getData;
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

module.exports.insertQuote = async (data) => {
  try {
    const insertedData = await quoteTable.create(data);
    if (insertedData) {
      return insertedData;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports.deleteQuote = async (id) => {
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
    console.log(error);
    return null;
  }
};

module.exports.updateQuote = async (data, id) => {
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
    console.log(error);
    return null;
  }
};
