const express = require('express');
const shortPolling = require('./shortPolling');
const longPolling = require('./longPolling')

const router = express.Router();

router.use('/shortPolling', shortPolling);
router.use('/longPolling', longPolling);


module.exports = router;