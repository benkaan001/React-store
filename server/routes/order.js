const router = require('express').Router();
const { Order } = require('../models');
const { verifyAuthorized, verifyAdmin } = require('../utils/authentication');

// _________________ USER && ADMIN ROUTES __________________________ //

// Create a new Order

router.post('/', verifyAuthorized, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Update an Order by ID

router.put('/:id', verifyAuthorized, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete an Order by ID

router.delete('/:id', verifyAuthorized, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(
        `Your oder with ID# ${req.params.id} has been successfully removed!`
      );
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get an Order by userId

router.get('/:userId', verifyAuthorized, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// ____________________ ADMIN-ONLY ROUTE(S) _______________________________ //

// Get all Orders

router.get('/', verifyAdmin, async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
