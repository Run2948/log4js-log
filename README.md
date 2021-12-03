# [log4js](https://log4js-node.github.io/log4js-node/)

This is a conversion of the log4js framework to work with node. I started out just stripping out the browser-specific code and tidying up some of the javascript to work better in node. It grew from there. Although it’s got a similar name to the Java library log4j, thinking that it will behave the same way will only bring you sorrow and confusion.

## Installation

```bash
npm install log4js
```


## Usage

Minimalist version:

```js
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug"; // default level is OFF - which means no logs at all.
logger.debug("Some debug messages");
```

