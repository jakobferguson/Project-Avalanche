const bcrypt = require('bcryptjs');
const db = require('../config/db');


async function createAccount(req, res) {
    const { email, full_name, password, u_weight, g_weight, g_macros } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL query to insert the user into the database
    const query = `
        INSERT INTO Users (userID, full_name, pw, u_weight, g_weight, g_macros)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING userID
    `;

    try {
        // Execute the query
        const result = await db.query(query, [email, full_name, hashedPassword, u_weight, g_weight, g_macros]);
        res.status(201).json({ userId: result.rows[0].userID });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ error: 'Error creating account' });
    }
}


async function login(req, res) {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE userID = $1`;

    try {
        const result = await db.query(query, [email]);
        const user = result.rows[0];

        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: 'Login successful', userId: user.id });
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
    }
}

async function deleteAccount(req, res) {
  const { userId } = req.params;
  const query = `DELETE FROM Users WHERE userID = $1`;

  try {
      await db.query(query, [userId]);
      res.status(200).json({ message: "Account deleted successfully." });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting account." });
  }
}

module.exports = { createAccount, login, deleteAccount };