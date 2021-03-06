const {
  getQuote, insertQuote, deleteQuote, updateQuote,
} = require('../model/use-cases');
const { logger } = require('../config/logger');

const { errorObj } = require('../config/errors.json');

const get = async (req, res) => {
  try {
    const getData = await getQuote();
    if (getData.length > 0) {
      res.status(200);
      res.send(getData);
    } else {
      res.status(500);
      res.send(errorObj);
    }
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send(error);
  }
};

const insert = async (req, res) => {
  try {
    const data = {
      quote: req.body.quote || ' qoute missing! ',
      author: req.body.author || ' author missing! ',
      tag: req.body.tag || ' tag missing! ',
    };
    const insertData = await insertQuote(data);

    if (insertData) {
      res.status(200);
      res.send(insertData);
    } else {
      res.status(500);
      res.send(errorObj);
    }
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send(error);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteData = await deleteQuote(id);

    if (deleteData) {
      res.status(200);
      res.send('Quote deleted successfully');
    } else {
      res.status(500);
      res.send(errorObj);
    }
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.body;
    const data = {};
    req.body.hasOwnProperty('author') ? data.author = req.body.author : '';
    req.body.hasOwnProperty('quote') ? data.quote = req.body.quote : '';
    req.body.hasOwnProperty('tag') ? data.tag = req.body.tag : '';

    const updateData = await updateQuote(data, id);

    if (updateData) {
      res.status(200);
      res.send(`${updateData[0]}  Quote Updated successfully`);
    } else {
      res.status(500);
      res.send(errorObj);
    }
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send(error);
  }
};

module.exports = {
  get, insert, destroy, update,
};
