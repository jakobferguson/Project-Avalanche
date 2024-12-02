const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const workoutRoutes = require('./src/routes/workoutRoutes');
const equipmentRoutes = require('./src/routes/equipmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/equipment', equipmentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
