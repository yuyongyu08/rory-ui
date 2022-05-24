"use strict";

const button = require("@yuyy-ui/button");
const input = require("@yuyy-ui/input");
const toast = require("@yuyy-ui/toast");

module.exports = roryUi;

function roryUi() {
  console.log("hello rory-ui!");
  button();
  input();
  toast();
}

roryUi();
