const express = require('express');
const {
    createNote,
    getSingleNote,
    getNotes,
    deleteNote,
    updateNote
} = require('../controllers/noteController')

const router = express.Router();

// GET all notes
router.get('/', getNotes)

// GET single notes
router.get('/:id', getSingleNote)

// POST all notes
router.post('/', createNote);

// DELETE a note
router.delete('/:id', deleteNote);

// UPDATE edit a note
router.patch('/:id', updateNote);



module.exports = router;