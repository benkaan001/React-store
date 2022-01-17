const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.todkenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      }
      res.status(200).json(stripeRes);
    }
  );
});

module.exports = router;
