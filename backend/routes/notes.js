const express = require('express');

const router = express.Router();

// GET all notes
router.get('/', (req, res) => {
    res.json({msg: 'GET all notes'})
})

// GET single notes
router.get('/:id', (req, res) => {
    res.json({msg: 'GET single note'})
})

// POST all notes
router.post('/', (req, res) => {
    res.json({msg: 'POST new notes'})
})

// DELETE a note
router.delete('/:id', (req, res) => {
    res.json({msg: 'delete a note'})
})

// UPDATE edit a note
router.patch('/:id', (req, res) => {
    res.json({msg: 'update a note'})
})



module.exports = router;