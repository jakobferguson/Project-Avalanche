const express = require('express');
const { addEqp, addUserEqp, deleteUserEqp } = require('../modules/equipmentModules');
const router = express.Router();

router.post('/add', addEqp);
router.post('/user', addUserEqp);
router.delete('/:userId/:eqpId', deleteUserEqp);

module.exports = router;
