var assert = require('assert');
var launching = require('../launching');

describe('canLaunch', function() {
  it('should return 💁‍♀️💩 when we pass in no parameters', function() {
    var value = launching.canLaunch();
    assert.equal("💁‍♀️💩", value);
  });
  it('should return 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🤗 when we pass in weight 100 and fuel 3', function() {
    var value = launching.canLaunch(100, 3);
    assert.equal("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🤗", value);
  });
  it('should return 🐶 when given only a weight', function() {
    var value = launching.canLaunch(100);
    assert.equal("🐶", value);
  });
});