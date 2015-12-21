
// namespacing
// for global access and organizing things together
var app = app || {};       // definitions (blueprints) here
var active = active || {}; // instantiated objects go here

// my app.Model inherits from bbmodel
app.Model = Backbone.Model.extend({
  idAttribute: '_id', // mongodb api data has this _id since mongodb doesn't have id's.
  // http://stackoverflow.com/questions/8007218/backbone-using-a-different-field-name-for-id
  initialize: function() {
    console.log('A model was dynamically generated');
  }
});

// mongodb support
// override the model's idAttribute to '_id'
Backbone.Model.idAttribute = "_id";

app.Collection = Backbone.Collection.extend({
  model: app.Model,
  initialize: function() {
    console.log('The collection of pancakes is on the loose');
  },
  url: '/api'
});

// this is a "container"
app.CollectionView = Backbone.View.extend();

// individual item in collection of items
// this is like a constructor 
app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log('A modelView was dynamically generated');
    this.render();
  },
  render: function() {
    // use our model's attrs
    var data = this.attributes;
    // get the text of a template
    var template = $('#recipe-template').html();
    // underscore transforms my template into a method
    // this method accepts data as an argument to render it
    var compileTpl = _.template(template);
    var html = compileTpl(data);
    console.log(html);
  }
});

$(document).ready(function() {
  // when the page loads...
  console.log('here we go! pancakes, pancakes everywhere!');
});
