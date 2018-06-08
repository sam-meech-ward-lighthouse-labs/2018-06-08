var cowsay = require('cowsay');

function countdown(from) {
  setInterval(function() {
    var text = from > 0 ? `${from}` : "🚀";
    console.log(cowsay.say({text: text, e : "👀",T : "👅"}))
    from -= 1;

  }, 500);
}

module.exports = countdown;
// console.log(module.exports);
// console.log(module.exports === exports);