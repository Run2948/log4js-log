var express = require('express');
var path = require('path');
var serveIndex = require('serve-index');
// var serveStatic = require('serve-static');
var app = express();

const { consoleLogger, logger } = require('./log');

app.use("/logs", serveIndex(path.join(__dirname, 'logs'), { 'icons': true }));
app.use("/logs", express.static(path.join(__dirname, 'logs')));
// app.use("/logs", serveStatic(path.join(__dirname, 'logs')));

app.get('/', function (req, res) {
  res.send('hello world');
  consoleLogger.debug('this is console log');
  consoleLogger.error('this is console log');
  logger.debug("this is nonsee log");
  logger.info("this is log, req = {}", req);
});

const server = app.listen(3000, 'localhost', () => {
  const { address, port } = server.address()
  console.log(`Server is listenning at http://${address}:${port}.`)
});