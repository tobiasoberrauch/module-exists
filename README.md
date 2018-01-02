# module exists
Simply easy: Checks if a node module or file exists or not

## Installation
```
npm install module-exists --save
```

## Basic Usage
```js
var module_exists = require('module-exists');
if (module_exists('nodeunit')) {
   ...
}
if (module_exists('./lib/helper.js')) {
   var helper = require('./lib/helper.js');
}
```

## Run tests
```
npm install -g nodeunit
npm test
```

Inspired by [Francois-Guillaume Ribreau](https://gist.github.com/FGRibreau/3135914)
Contributors: [Tushar Mathur](https://github.com/tusharmath) (typescript)