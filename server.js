const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Frontend files serve karne ke liye
app.use(express.static(path.join(__dirname)));

// PostgreSQL Database Connection
// Railway automatic DATABASE_URL environment variable provide karta hai
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Database Connection Test & Orders Table Create karna
pool.query(`CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    items TEXT,
    total NUMERIC,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`, (err, res) => {
    if (err) {
        console.error('Database table creation error:', err);
    } else {
        console.log('Connected to PostgreSQL & Orders table is ready.');
    }
});

// Order Save karne ki API Route (PostgreSQL version)
app.post('/api/orders', async (req, res) => {
    const { name, address, items, total } = req.body;
    
    if (!name || !address || !items || items.length === 0) {
        return res.status(400).json({ error: 'Invalid order data!' });
    }

    const itemsString = JSON.stringify(items);
    const query = `INSERT INTO orders (name, address, items, total) VALUES ($1, $2, $3, $4) RETURNING id`;
    
    try {
        const result = await pool.query(query, [name, address, itemsString, total]);
        res.json({ success: true, orderId: result.rows[0].id, message: 'Order placed successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Saare orders dekhne ke liye API Route
app.get('/api/orders', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM orders ORDER BY id DESC`);
        res.json({ success: true, orders: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server Start
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});