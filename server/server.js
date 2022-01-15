const express = require('express');
require('dotenv').config();

const app = express();

// DB connection
const connectDB = require('./config/connection');

app.use(express.json());

// routers

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

// routes

app.use('/api/users', userRoutes);
app.use('./api/products', productRoutes);

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`🌍----> Server is listening on port ${PORT}----->🌍`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
