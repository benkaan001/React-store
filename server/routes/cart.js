const router = require('express').Router();
const { verifyAdmin, verifyAuthorized } = require('../utils/authentication');
const { Cart } = require('../models');

// __________________ USER && ADMIN ROUTES _______________ //

// Create a new Cart

router.post('/', async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Updata a Cart

router.put('/:id', verifyAuthorized, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete a CART

router.delete('/:id', verifyAuthorized, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(`Cart with ID# ${req.params.id} has been successfully removed! `);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get a CART by userId

router.get('/:userId', verifyAuthorized, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// ___________________ ADMIN-ONLY ROUTE(S)______________ //

// Get all Carts

router.get('/', verifyAdmin, async (req, res) => {
  try {
    const allCarts = await Cart.find();
    res.status(200).json(allCarts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
