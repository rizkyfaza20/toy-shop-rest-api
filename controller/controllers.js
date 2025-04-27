const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient();

// List Data
const listingToys = async (req, res) => {
    try {
        const toys = await prisma.Toy.findMany();
        res.status(200).json(toys);
    } catch (error) {
        console.error('Error fetching toys:', error);
        res.status(500).json({ error: 'Failed to fetch toys' });
    }
};

const listOrderId = async (req, res) => {
    try {
        const orders = await prisma.orders.findMany();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

const listCustomer = async (req, res) => {
    try {
        const customers = await prisma.Customer.findMany();
        res.status(200).json(customers);
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
};

// Insert Data
const insertToy = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const newToy = await prisma.Toy.create({
            data: { name, description, price, stock },
        });
        res.status(201).json(newToy);
    } catch (error) {
        console.error('Error inserting toy:', error);
        res.status(500).json({ error: 'Failed to insert toy' });
    }
};

const insertOrder = async (req, res) => {
    try {
        const { customerId, toyId, quantity } = req.body;
        const newOrder = await prisma.orders.create({
            data: { customerId, toyId, quantity },
        });
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error inserting order:', error);
        res.status(500).json({ error: 'Failed to insert order' });
    }
};

const insertCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newCustomer = await prisma.Customer.create({
            data: { name, email, phone },
        });
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error('Error inserting customer:', error);
        res.status(500).json({ error: 'Failed to insert customer' });
    }
};

// Update Data
const updateToy = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category } = req.body;
        const updatedToy = await prisma.Toy.update({
            where: { id: parseInt(id) },
            data: { name, price, category },
        });
        res.status(200).json(updatedToy);
    } catch (error) {
        console.error('Error updating toy:', error);
        res.status(500).json({ error: 'Failed to update toy' });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { order_id, stock } = req.body;
        const updatedOrder = await prisma.orders.update({
            where: { id: parseInt(id) },
            data: { order_id, stock },
        });
        res.status(200).json(updatedOrder);
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ error: 'Failed to update order' });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, number, email } = req.body;
        const updatedCustomer = await prisma.Customer.update({
            where: { id: parseInt(id) },
            data: { name, address, number },
        });
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({ error: 'Failed to update customer' });
    }
};

// Delete Data
const deleteToy = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.Toy.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: 'Toy deleted successfully' });
    } catch (error) {
        console.error('Error deleting toy:', error);
        res.status(500).json({ error: 'Failed to delete toy' });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.orders.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: 'Failed to delete order' });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.Customer.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Failed to delete customer' });
    }
};

module.exports = {
    listingToys,
    listOrderId,
    listCustomer,
    insertToy,
    insertOrder,
    insertCustomer,
    updateToy,
    updateOrder,
    updateCustomer,
    deleteToy,
    deleteOrder,
    deleteCustomer,
};