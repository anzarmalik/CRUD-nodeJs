const express = require('express');

const router = express.Router();
const {
  get, insert, destroy: deleteData, update,
} = require('../controller');

// get data
router.get('/', get);

// insert data
router.post('/', insert);

// delete data
router.delete('/', deleteData);

// update data
router.put('/', update);

module.exports = router;
