const express = require('express');
const { addExc, deleteExc, viewExcByType } = require('../modules/workoutModules');
const router = express.Router();

router.post('/add', addExc);
router.delete('/:exerciseId', deleteExc);
router.get('/view', viewExcByType);

module.exports = router;
