const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

// GET all notes
router.get('/', noteController.getAll);

// GET note by id
router.get('/:id', noteController.getById);

// Create note
router.post('/', noteController.add);

module.exports = router;