'use strict';

var mongoose = require('mongoose');

var sampleSchema = new mongoose.Schema({
  sample: { type: String, required: true }
});

module.exports = mongoose.model('Sample', sampleSchema);

