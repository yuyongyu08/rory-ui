"use strict";
const _ = require("lodash");

module.exports = {
  concat,
};

function concat(a, b) {
  console.log(_.concat(a, b).reduce((a,b) => a + b));
}
