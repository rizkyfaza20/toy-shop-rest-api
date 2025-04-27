const { body } = require('express-validator');

const validateToy = [ 
    body('name').notEmpty().withMessage('Name is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category is required'),
];
const validateCustomer = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('phone').notEmpty().withMessage('Phone number is required'),
];
const validateOrder = [
    body('customerId').isNumeric().withMessage('Customer ID must be a number'),
    body('toyId').isNumeric().withMessage('Toy ID must be a number'),
    body('quantity').isNumeric().withMessage('Quantity must be a number'),
];

module.exports = {
    validateToy,
    validateCustomer,
    validateOrder,
};

