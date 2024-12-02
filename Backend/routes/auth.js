const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
const router = express.Router();

// Setup koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Endpoint untuk registrasi
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Hash password sebelum disimpan
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Password hashing failed' });
    }

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Endpoint untuk login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];

    // Bandingkan password yang dimasukkan dengan password yang ter-hash
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Password comparison failed' });
      }
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid password' });
      }

      // Jika login berhasil, kirim respons sukses
      res.status(200).json({ message: 'Login successful' });
    });
  });
});

module.exports = router;
