const express = require('express');
const router = express.Router();
const { Booking } = require('../models');

// Get all bookings
router.get('/', async (req, res) => {
    try {
      const booking = await Booking.findAll();
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Add a new bookings
router.post('/', async (req, res) => {
    try {
      const booking = await Booking.create(req.body);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;