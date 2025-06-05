const express = require('express');
const { orderCreate,getAllorder} = require('../controllers/orderController');

const router = express.Router();

router.route('/order').post(orderCreate);
router.route('/getorder').get(getAllorder);

module.exports = router;