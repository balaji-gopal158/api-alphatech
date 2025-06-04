const express = require('express');
const { getProducts, getProductsbtId ,deleteProductbyId,updateProductbyId} = require('../controllers/productController');
const router = express.Router();

/**
 * @swagger
 * /alphatech/api/product:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     description: Retrieve all products from the database
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 */

/**
 * @swagger
 * /alphatech/api/productbyId/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Product ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 */

router.route('/product').get(getProducts);


router.route('/productbyId/:id').get(getProductsbtId);
router.route('/productbyId/:id').delete(deleteProductbyId);
router.route('/productbyId/:id').put(updateProductbyId);


module.exports = router;

