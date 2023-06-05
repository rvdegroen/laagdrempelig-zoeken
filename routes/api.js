// const express = require('express');
// const router = express.Router();
// const apiController = require('../controllers/apiController');

// // in /api/example
// router
//     .route('/example/')
//     .get(apiController.getExample)
//     .post(apiController.postExample);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { fetchData } = require('../controllers/apiController');

router.get('/', fetchData);

module.exports = router;

