// not necessary - Optional: API to translate hairstyle request to German// Translate endpoint (simulated, no real API key)
const express = require('express');
const router = express.Router();

// POST /api/translate
router.post('/', async (req, res) => {
    const { text } = req.body;
    // Simulate translation
    res.json({ translated: `German: ${text} (simulated)` });
});

module.exports = router;