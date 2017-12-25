const clc = require('cli-color')

const error = clc.red
const success = clc.green
const warn = clc.yellow
const info = clc.cyan

module.exports = {
  success (msg) {
    console.log(success(msg))
  },
  error (msg) {
    console.log(error(msg))
  },
  warn (msg) {
    console.log(warn(msg))
  },
  info (msg) {
    console.log(info(msg))
  }
}
