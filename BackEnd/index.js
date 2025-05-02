const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

const port = process.env.PORT || 5000;

// ✅ Use async IIFE to keep things clean
(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");

    // Your routes go here
    app.get('/', (req, res) => {
      res.send('Sabuktagin');
    });

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
})();
