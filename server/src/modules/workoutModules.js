const db = require('../config/db');

async function addExc(req, res) {
  const { exerciseName, muscleGroup, equipment, intensity } = req.body;
  const query = `INSERT INTO Exercise (name, muscle_group, equipment, intensity) VALUES ($1, $2, $3, $4) RETURNING id`;

  try {
      const result = await db.query(query, [exerciseName, muscleGroup, equipment, intensity]);
      res.status(201).json({ exerciseId: result.rows[0].id });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error adding exercise." });
  }
}

async function deleteExc(req, res) {
  const { exerciseId } = req.params;
  const query = `DELETE FROM Exercise WHERE id = $1`;

  try {
      await db.query(query, [exerciseId]);
      res.status(200).json({ message: "Exercise deleted." });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting exercise." });
  }
}

async function viewExcByType(req, res) {
  const { type } = req.query;
  const query = `SELECT * FROM Exercise WHERE muscle_group = $1 OR equipment = $1 OR intensity = $1`;

  try {
      const result = await db.query(query, [type]);
      res.status(200).json(result.rows);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error viewing exercises by type." });
  }
}

async function viewAllExc(req, res){
  const query = `SELECT * FROM Exercise`;

  try {
      const result = await db.query(query);
      res.status(200).json(result.rows);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error viewing exercises by type." });
  }
}

module.exports = {addExc, deleteExc, viewExcByType, viewAllExc}