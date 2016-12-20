"use strict";
var button_1 = require("./button");
var a = new button_1.default("Clear", "app");
var cleared = a.stream.map(function (u) { return ''; });
var cool = cleared.listen(function (x) { return console.log("hi"); });
