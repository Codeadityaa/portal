const Application = require('../models/Application');

exports.applyForJob = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getApplicationsByUser = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.params.userId }).populate('job');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
