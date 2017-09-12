# Dude, where's my HD?
[![npm package version](https://img.shields.io/npm/v/dude-wheres-my-hd.svg?style=flat-square)](https://www.npmjs.com/package/dude-wheres-my-hd) [![index.js file size](https://img.shields.io/github/size/itsahappymedium/dude-wheres-my-hd/index.js.svg?style=flat-square)](index.js) [![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard) [![license](https://img.shields.io/github/license/itsahappymedium/dude-wheres-my-hd.svg?style=flat-square)](LICENSE.md)

A small CLI tool that will find out which directories are taking up the most your hard drive space.

## Installation/Usage

### CLI
```shell
npm install --global dude-wheres-my-hd
dude-wheres-my-hd /www/sites 20
```

### Node
```shell
npm install --save dude-wheres-my-hd
```

```javascript
const findMyHdBro = require('dude-wheres-my-hd')
var hd = findMyHdBro('/www/sites', 20)
console.log(hd)
```

## License
MIT. See the [License file](LICENSE.md) for more info.
