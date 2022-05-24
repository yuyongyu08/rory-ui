"use strict";

const button = require("@rory-ui/button");
const input = require("@rory-ui/input");
const toast = require("@rory-ui/toast");

module.exports = roryUi;

function roryUi() {
  console.log("hello rory-ui!");
  button();
  input();
  toast();
}

roryUi();
