const router = require('express').Router();
const { verifyAdmin } = require('../utils/authentication');
const { Product } = require('../models');

// __________________ USER && ADMIN ROUTES _______________ //

// Get a Product by ID

router.get('/:id', async (req, res) => {
  try {
    const searchedProduct = await Product.findById(req.params.id);
    res.status(200).json(searchedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all Products by new OR category when specified in the req ELSE send all

router.get('/', async (req, res) => {
  const queryByNewProducts = req.query.new;
  const queryByCategory = req.query.category;

  try {
    let products = [];

    if (queryByNewProducts) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (queryByCategory) {
      products = await Product.find({ categories: { $in: [queryByCategory] } });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// ____________________ ADMIN-ONLY ROUTES __________________ //

// Create a new Product

router.post('/', verifyAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Updata a Product by ID

router.put('/:id', verifyAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete a Product by ID

router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(`You have successfully removed product with ID# ${req.params.id}`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
