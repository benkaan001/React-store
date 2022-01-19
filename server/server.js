const express = require('express');
require('dotenv').config();

const routes = require('./routes/index');

const cors = require('cors');

const app = express();

// activate cors
app.use(cors());

// DB connection
const connectDB = require('./config/connection');

// access to req.body
app.use(express.json());

// turn on routes
app.use(routes);

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
