const express = require('express');
const router = express.Router();
const frontendController = require('../controllers/frontendController');

// different pages get a route
router.route('/').get(frontendController.index);

module.exports = router;
