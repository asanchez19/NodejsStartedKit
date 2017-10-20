const express = require('express')
const router = express.Router()
const MainController = require('../controllers/main');

router.get('/', MainController.main)

module.exports = router;