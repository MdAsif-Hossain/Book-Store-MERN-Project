const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ✅ Import cors
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}));

// ✅ Import and use routes
const bookRouter = require('./src/books/book.route');
app.use("/api/books", bookRouter); // ✅ Use the correct variable name

// ✅ Use async IIFE to connect to DB and start server
(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully!");

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
