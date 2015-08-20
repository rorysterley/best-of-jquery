'use strict';

var bodyparser = require('body-parser');
var Sample = require('../models/Sample');

module.exports = function(app) {
  app.use(bodyparser.json());

  // GET
  app.get('/sample', function(req, res) {
    Sample.find({}, function(err, data) {
      if (err) { return res.status(500).send({'msg': 'Could not retrive.'}); }

      res.json(data);
    });
  });

  // POST
  app.post('/sample', function(req, res) {
    var newSample = new Sample(req.body);
    newSample.save(function(err, sample) {
      if (err) { return res.status(500).send({'msg': 'Could not update.'}); }

      res.json(todo);
    });
  });

  // PUT
  app.put('/sample/:id', function(req, res) {
    var updatedSample = req.body;
    delete updatedSample._id;
    Sample.update({_id: req.params.id}, updatedSample, function(err) {
      if (err) { return res.status(500).send({'msg': 'Could not update.'}); }

      res.json(req.body);
    });
  });

  // DELETE
  app.delete('/sample/:id', function(req, res) {
    Sample.remove({_id: req.params.id}, function(err) {
      if (err) { return res.status(500).send({'msg': 'Could not delete.'}); }

      res.json({'msg': 'Sample with id: ' + req.params.id + ' deleted.'});
    });
  });
};

