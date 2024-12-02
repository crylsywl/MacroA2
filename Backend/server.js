const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const dotenv = require('dotenv');

// Memuat variabel lingkungan dari file .env
dotenv.config();

const app = express();

// Mengimpor routing untuk autentikasi
const authRoutes = require('./routes/auth');

// Middleware
app.use(cors());
app.use(express.json()); // Untuk memparsing JSON body

// Setup koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Gunakan route auth.js
app.use('/auth', authRoutes);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
