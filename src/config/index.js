require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');

const app = express();
const { logger, expressLogger } = require('./logger');

app.use(expressLogger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server listening at http://localhost:${port}`);
});

module.exports = app;
