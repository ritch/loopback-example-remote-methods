var loopback = require('loopback');
var app = require('../app');
var product = app.models.product;


product.stats = function(callback) {
  product.count(function(err, count) {
    if(err) {
      callback(err);
    } else {
      callback(null, {
        totalAvailable: count
      });
    }
  });
}

loopback.remoteMethod(product.stats, {
  returns: {arg: 'stats', type: 'object'}
});
