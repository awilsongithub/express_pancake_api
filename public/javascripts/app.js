/*=======================================================
                     namespace
=======================================================*/
// app or obj. in case another file loaded first
// and it's already existing.
var app = app || {};
// active is for instantiated objects
var active = active || {};

// model should be first
app.Model = Backbone.Model.extend({
});

// define my 4 important parts!
app.Collection = Backbone.Collection.extend({
  model: app.Model, // what type of models will this collection hold?
  url: '/api',
  initialize: function() {
    var self = this;
    this.on('change', function() {
      console.log('Our Collection changed.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('sync', function() {
      console.log('Our Collection synced with the API.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    // get data from the API
    this.fetch();
  }
});

Backbone.Model.idAttribute = "_id";

app.CollectionView = Backbone.View.extend({
  el: $('#pancake-listing'),
  initialize: function() {
    console.log('CollectionView is a go.');
    // when loaded, let us render immediately
    this.render();
  },
  render: function() {
    console.log('CollectionView is rendering.');
    // we expect our CollectionView to be bound to a Collection
    var models = this.collection.models;
    for (var m in models) {
      new app.ModelView({
        model: models[m],
        el: this.el
      });
    }
  }
});

// mView uses render of data, template, _., append.
// and is like <li> within cView <ul>
app.ModelView = Backbone.View.extend({
  initialize: function() {
    console.log('ModelView instantiated and awaiting orders, sir');
    this.render();
  },
  render: function() {
    console.log('ModelView rendering.');
    // this.model will be specified later...
    // it doesn't know it yet...
    var data = this.model.attributes;
    console.log('grabbing template');
    var template = $('#recipe-template').html();
    console.log('transforming template');
    var compileTpl = _.template(template);
    console.log('creating html from template and model data');
    var html = compileTpl(data);
    console.log(html);
    console.log('rendering to page..');
    // $el is a backbone item that gathers all the
    // dom info above inton one place like
    // dtown chcg is within the el loop
    this.$el.append(html);
  }
});

// mongoDB support!
Backbone.Model.idAttribute = "_id";

// the document is ready
$(document).ready(function(){
  active.collection = new app.Collection();
});
