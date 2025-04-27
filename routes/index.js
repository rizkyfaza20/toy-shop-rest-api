const express = require('express');
const router = express.Router();

const controllers = require('../controller/controllers');

// Welcome route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Toy Store API' });
});

// List routes
router.get('/list/toys', controllers.listingToys);
router.get('/list/orders', controllers.listOrderId);
router.get('/list/customers', controllers.listCustomer);

// Insert routes
router.post('/insert/toy', controllers.insertToy);
router.post('/insert/order', controllers.insertOrder);
router.post('/insert/customer', controllers.insertCustomer);

// Update routes
router.put('/update/toy/:id', controllers.updateToy);
router.put('/update/order/:id', controllers.updateOrder);
router.put('/update/customer/:id', controllers.updateCustomer);

// Delete routes
router.delete('/delete/toy/:id', controllers.deleteToy);
router.delete('/delete/order/:id', controllers.deleteOrder);
router.delete('/delete/customer/:id', controllers.deleteCustomer);

module.exports = router;