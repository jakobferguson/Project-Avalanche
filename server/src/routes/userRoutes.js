const express = require('express');
const { createAccount, login } = require('../modules/userModules');
const router = express.Router();

router.post('/signup', createAccount);
router.post('/login', login);

module.exports = router;