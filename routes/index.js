var express = require('express');
var router = express.Router();

var siteData = {
   title: 'Pancake API',
   version: '1.0.0',
   authors: 'WDI Roger Panella',
   date: 'Dec 21, 2015'
};


/* GET home page. */
// render siteData object to index view
// so we can call it's properties
router.get('/', function(req, res, next) {
  res.render('index', siteData);
});

module.exports = router;
