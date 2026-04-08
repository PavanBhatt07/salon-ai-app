//MongoDB schema for booking form// Booking route to save booking data
const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST /api/booking
router.post('/', async (req, res) => {
    try {
        const { name, phone, date, time, service } = req.body;
        const booking = new Booking({ name, phone, date, time, service });
        await booking.save();
        res.json({ message: 'Booking confirmed! Thank you.' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving booking.' });
    }
});

module.exports = router;