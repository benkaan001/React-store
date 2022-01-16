const router = require('express').Router();
const { User } = require('../models');
const { verifyAuthorized, verifyAdmin } = require('../utils/authentication');

// _________________ USER && ADMIN ROUTES __________________________ //

// Update a User by ID
router.put('/:id', verifyAuthorized, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Delete a User by ID

router.delete('/:id', verifyAuthorized, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json(`User with ID# ${req.params.id} has been successfully deleted!`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// ________________________ ADMIN-ONLY ROUTES ___________________________ //

// Get a User by ID

router.get('/:id', verifyAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// Get all Users

router.get('/', verifyAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get total number of users by Month in the current year

router.get('/stats', verifyAdmin, async (req, res) => {
  const date = new Date();
  const previousYear = new Date(date.setFullYear(date.getFullYear() - 1));
  //   console.log(previousYear);

  // get users with Mongoose aggregate method with these three conditions:
  // createdAt greater than previousYear
  // assign the month value at createdAt to the month value
  // group them by the month value and return the sum of every user

  try {
    const userData = await User.aggregate([
      { $match: { createdAt: { $gte: previousYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
