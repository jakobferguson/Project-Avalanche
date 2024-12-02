const express = require('express');
const db = require('../config/db');
const { createAccount, login, deleteAccount } = require('../modules/userModules');
const router = express.Router();

router.post('/signup', createAccount);
router.post('/login', login);
router.delete('/:userId', deleteAccount);

router.get('/', async (req, res) => {
  try {
      const result = await db.query('SELECT * FROM Users');
      res.status(200).json({ status: 'success', data: result.rows });
  } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Failed to fetch users' });
  }
});


module.exports = router;