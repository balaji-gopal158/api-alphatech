const express = require('express');
const { orderCreate } = require('../controllers/orderController');

const router = express.Router();

router.route('/order').post(orderCreate);

module.exports = router;