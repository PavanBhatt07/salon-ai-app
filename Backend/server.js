//Express server, connects all APIs// Main server file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const aiRoutes = require('./routes/ai');
const bookingRoutes = require('./routes/booking');
const translateRoutes = require('./routes/translate');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

// Routes
app.use('/api/analyze', aiRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/translate', translateRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/salonai', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});