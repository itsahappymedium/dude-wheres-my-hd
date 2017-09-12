#!/usr/bin/env node

const columnify = require('columnify')
const filesize = require('filesize')
const fs = require('fs')

var directories = {}

function getDirectorySize (dir) {
  var files = fs.readdirSync(dir)
  var size = 0

  files.forEach(file => {
    file = dir + '/' + file
    if (fs.lstatSync(file).isDirectory()) {
      size += getDirectorySize(file)
    } else {
      size += fs.statSync(file).size
    }
  })

  directories[dir] = size
  return size
}

function findMyHdBro (dir, count) {
  if (!dir) { dir = '.' }
  if (!count) { count = 20 }

  var hd = {}

  getDirectorySize(dir)

  var sorted = Object.keys(directories).sort((a, b) => {
    return directories[b] - directories[a]
  })

  sorted.slice(0, count).forEach(dir => {
    hd[dir] = filesize(directories[dir])
  })

  return hd
}

if (require.main === module) {
  var hd = findMyHdBro(process.argv[2], process.argv[3])
  console.log(columnify(hd, { columns: ['DIRECTORY', 'SIZE'] }))
}

module.exports = findMyHdBro
