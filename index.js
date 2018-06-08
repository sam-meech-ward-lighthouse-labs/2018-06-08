// (function (exports, require, module, __filename, __dirname) { 

var launching = require("./launching");
// console.log(launching);

var countdown = require("./countdown");
// console.log(countdown);

var cowsay = require('cowsay');

var weight = process.argv[2];
var fuel = process.argv[3];

console.log(cowsay.say({
	text : launching.canLaunch(weight, fuel),
	e : "👀",
	T : "👅"
}));

countdown(5);

// console.log(canLaunch(100, 3));
// console.log(canLaunch(120, 3));
// });