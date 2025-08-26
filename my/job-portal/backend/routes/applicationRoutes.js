const express = require('express');
const { applyForJob, getApplicationsByUser } = require('../controllers/applicationController');
const router = express.Router();

router.post('/', applyForJob);
router.get('/user/:userId', getApplicationsByUser);

module.exports = router;
