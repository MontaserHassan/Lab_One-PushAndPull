const express = require('express');
const { longPollingController } = require('../controllers/index')

const router = express.Router();

router.get('/' , longPollingController.getAllNotification);
router.post('/', longPollingController.createNotification);

module.exports = router;