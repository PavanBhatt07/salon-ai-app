//Endpoint for photo upload + AI hairstyle suggestion// AI hairstyle suggestion route (simulated)
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, '../Uploads')),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// POST /api/analyze
router.post('/', upload.single('photo'), (req, res) => {
    // Simulate AI suggestion
    const hairstyles = [
        'Short Bob', 'Layered Cut', 'Pixie', 'Long Waves', 'Undercut', 'Curly Shag'
    ];
    const suggestion = hairstyles[Math.floor(Math.random() * hairstyles.length)];
    res.json({ recommendation: `Recommended style: ${suggestion}` });
});

module.exports = router;