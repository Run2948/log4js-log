// TODO: npm install log4js
const log4js = require('log4js')
log4js.configure({
  appenders: {
    console: { type: 'stdout' },
    file: { type: 'file', filename: __dirname + '/logs/all-logs.log' },
    rollingFile: {
      type: "dateFile",
      filename: __dirname + '/logs/logs.log',
      pattern: 'yyyyMMdd',
      compress: true,
      alwaysIncludePattern: true,
      keepFileExt: true
    }
  },
  categories: {
    default: { appenders: ['rollingFile'], level: 'info' },
    file: { appenders: ['file'], level: 'info' },
    console: { appenders: ['console'], level: 'debug' },
  }
})

exports.fileLogger = log4js.getLogger('file')
exports.consoleLogger = log4js.getLogger('console')
exports.logger = log4js.getLogger()

// Examples: 
// var express = require('express');
// var app = express();

// const { consoleLogger, logger } = require('./log');

// app.get('/', function (req, res) {
//   res.send('hello world');
//   consoleLogger.debug('this is console log');
//   consoleLogger.error('this is console log');
//   logger.debug("this is nonsee log");
//   logger.info("this is log");
// });

// app.listen(3000, () => {
//   console.clear()
//   console.log("Server is listenning at http://localhost:3000.")
// });