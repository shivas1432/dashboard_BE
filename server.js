require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL Database Connection Setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to MySQL Database
db.connect(err => {
    if (err) {
        console.error("Database Connection Failed!", err);
        return;
    }
    console.log("Connected to MySQL Database");
});

// Fetch Resume Users from Database
app.get('/resumeusers', (req, res) => {
    db.query("SET SESSION sql_select_limit=10000", () => {
        db.query("SELECT id, name, email FROM resumeusers", (err, results) => {
            if (err) {
                console.error("Error fetching resume users:", err);
                return res.status(500).json({ error: err.message });
            }
            res.json({ totalCount: results.length, users: results });
        });
    });
});

// Fetch All Guests (No Limit)
app.get('/guests', (req, res) => {
    db.query("SELECT id, name FROM guests", (err, results) => {
        if (err) {
            console.error("Error fetching guests:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json({
            totalCount: results.length,
            guests: results
        });
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
