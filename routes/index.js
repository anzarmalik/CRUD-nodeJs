var express = require('express');
var router = express.Router();
var { get, insert, delete : deleteData} = require("../controller");

// get data
router.get('/', get);

// insert data
router.post('/', insert);

// delete data
router.delete('/', deleteData);



module.exports = router;
