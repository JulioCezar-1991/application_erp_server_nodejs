'use strinc';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

router.get('/', controller.getOrderAll);
router.get('/open', controller.getOrderOpen);
router.get('/done', controller.getOrderDone);
router.get('/canceled', controller.getOrderCanceled);
router.post('/', controller.post);
router.patch('/', controller.patch);
router.delete('/', controller.delete);

module.exports = router;