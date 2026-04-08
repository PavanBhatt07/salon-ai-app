//Endpoint to save booking info in database// Booking schema for MongoDB
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    date: String,
    time: String,
    service: String,
    createdAt: { type: Date, default: Date.now }
});