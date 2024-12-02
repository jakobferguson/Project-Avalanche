const db = require('../config/db');

async function addEqp(req, res) {
    const { eqpName } = req.body;
    const query = `INSERT INTO Equipment (name) VALUES ($1) RETURNING id`;

    try {
        const result = await db.query(query, [eqpName]);
        res.status(201).json({ equipmentId: result.rows[0].id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding equipment." });
    }
}

async function addUserEqp(req, res) {
    const { userId, eqpName } = req.body;

    try {
        const eqpResult = await db.query(`SELECT id FROM Equipment WHERE name = $1`, [eqpName]);
        if (eqpResult.rows.length === 0) {
            return res.status(404).json({ error: "Equipment not found." });
        }

        const query = `INSERT INTO Eqp_owned (user_id, equipment_id) VALUES ($1, $2)`;
        await db.query(query, [userId, eqpResult.rows[0].id]);
        res.status(201).json({ message: "Equipment added to user." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding equipment to user." });
    }
}

async function deleteUserEqp(req, res) {
    const { userId, eqpId } = req.params;
    const query = `DELETE FROM Eqp_owned WHERE user_id = $1 AND equipment_id = $2`;

    try {
        await db.query(query, [userId, eqpId]);
        res.status(200).json({ message: "Equipment removed from user." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error removing equipment." });
    }
}

module.exports = {addEqp, addUserEqp, deleteUserEqp}