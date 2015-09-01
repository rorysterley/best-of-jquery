'use strict';

// REQUIRE ====================================================================
var express = require('express');
var mongoose = require('mongoose');

var sampleRoutes = require('./routes/sample_routes');

// SETTUP =====================================================================
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/b_o_jq_dev');

// ROUTES =====================================================================
var sampleRouter = express.Router();

sampleRoutes(sampleRouter);

// --- API V1 ---
app.use('/api/v1', sampleRouter);

// SERVER INIT ================================================================
app.listen(port, function() {
  console.log('\n==================================\n' +
              '= Server listening on port: ' + port + ' =' +
              '\n==================================\n');
});

