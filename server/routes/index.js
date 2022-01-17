const router = require('express').Router();

// routers

const userRoutes = require('./user');
const productRoutes = require('./product');
const orderRoutes = require('./order');
const cartRoutes = require('./cart');
const authRoutes = require('./auth');
const paymentRoutes = require('./payment');

// routes

router.use('/api/users', userRoutes);
router.use('/api/products', productRoutes);
router.use('/api/orders', orderRoutes);
router.use('/api/carts', cartRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/payment', paymentRoutes);

module.exports = router;
