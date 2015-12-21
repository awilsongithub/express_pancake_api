var express = require('express');
var router = express.Router();
var model = require('../models/Pancake');

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to user error.'
  };
};

function addMessageToSuccessfulQuery(obj, msg) {
  var ret = obj;
  ret.message = msg;
  return ret;
};

/* GET pancakes listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, pancakes) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(pancakes);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, pancake) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(pancake);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, pancake) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(pancake);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, pancake) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(addMessageToSuccessfulQuery(pancake, 'Your recipe was updated.'));
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, pancake) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(addMessageToSuccessfulQuery(pancake, 'Your recipe was updated.'));
    }
  });
});


router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, pancake) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(addMessageToSuccessfulQuery(pancake, 'Your recipe was removed.'));
    }
  });
});


module.exports = router;
