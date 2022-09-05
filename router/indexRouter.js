const express = require('express');
const router = express.Router();
const IndexController = require('../controller/indexController');

router.get('/', IndexController.homePage);
router.get('/about', IndexController.aboutPage);
router.get('/shop', IndexController.shopPage);
router.get('/contact', IndexController.contactPage);

module.exports = router;