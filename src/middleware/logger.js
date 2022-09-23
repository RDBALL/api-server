'use strict';

module.exports = function (req, res, next) {
  console.log(`Logging request with logger middleware: ${req.method}, ${req.originalUrl}`);
  next();
};
