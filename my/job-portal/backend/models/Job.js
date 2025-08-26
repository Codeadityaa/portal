const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  company: String,
  salary: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
