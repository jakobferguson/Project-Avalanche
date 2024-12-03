const express = require('express');
const { addExc, deleteExc, viewExcByType, viewAllExc } = require('../modules/workoutModules');
const router = express.Router();

router.post('/add', addExc);
router.delete('/:exerciseId', deleteExc);
router.get('/view', viewExcByType);
router.get('/all', viewAllExc);

module.exports = router;
