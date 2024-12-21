const express = require('express');
const router = express.Router();
const { Movie } = require('../models');

// Get all movies
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.findAll();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Add a new movies
router.post('/', async (req, res) => {
    try {
      const movies = await Movie.create(req.body);
      res.status(201).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;