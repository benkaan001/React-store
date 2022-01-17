const router = require('express').Router();
const { User } = require('../models');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// register

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404).json({ msg: `Must provide name, email, and password!` });
  }
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.CRYPTO_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

router.post('/login', async (req, res) => {
  //   const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(404).json({ msg: 'Invalid username!' });
    }
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SECRET
    );
    const rawPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (rawPassword !== req.body.password) {
      res.status(404).json({ msg: 'Invalid password!' });
    }

    const signToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: expiration }
    );
    // send all the userInfo inside Mongoose ._doc except user password
    const { password, ...userInfo } = user._doc;
    res.status(200).json({ ...userInfo, signToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
