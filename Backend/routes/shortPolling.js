const express = require('express');
const { shortPollingController } = require('../controllers/index')


const router = express.Router();

router.post('/', shortPollingController.createNotification)
router.get('/' , shortPollingController.getAllNotification);

module.exports = router;