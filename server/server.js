const express = require('express');
require('dotenv').config();
const connectDB = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log(` 🌍🌍🌍🌍🌍🌍---> Connected to MongoDB--->🌍🌍🌍🌍🌍`);
    app.listen(PORT, () =>
      console.log(`🌍----> Server is listening on port ${PORT}----->🌍`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
