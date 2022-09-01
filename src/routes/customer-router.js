'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.patch('/', controller.patch);
router.delete('/', controller.delete);

module.exports = router;