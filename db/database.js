// we need to require mongoose
var mongoose = require('mongoose');
// define connectionString
var connectionString = 'mongodb://localhost/pancakes';
// call mongoose.connect
mongoose.connect(connectionString);
// define .connection.on methods for
// connected, error, disconnected
mongoose.connection.on('connected', function() {
   console.log('making pancakes!');
});

mongoose.connection.on('error', function(err) {
   console.log(err);
});

mongoose.connection.on('disconnected', function() {
   console.log('uh oh, disconnected.');
});
