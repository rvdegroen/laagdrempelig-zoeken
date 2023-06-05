const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// in /api/example
router
    .route('/example/')
    .get(apiController.getExample)
    .post(apiController.postExample);

// .post(object.function-in-the-object)
router.route('/search/').post(apiController.search);

module.exports = router;
