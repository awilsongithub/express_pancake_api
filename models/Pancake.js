// require mongoose
var mongoose = require('mongoose');

// define new mongoose.Schema
var PancakeSchema = new mongoose.Schema({
   ingredients: String,
   type: String,
   topping: String,
   syrup: String,
   instructions: String,
   time: String
});

// export model module with 'Model', ModelSchema
module.exports = mongoose.model('Pancake', PancakeSchema);
