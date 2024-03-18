const Note = require('../models/noteModel')
const mongoose = require('mongoose');

// get all notes
const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({createdAt: -1})

    res.status(200).json(notes)
}

// get single note
const getSingleNote = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such note found'});
    }
    const note = await Note.findById(id);
    
    if(!note){
        return res.status(404).json({error: ' No such note found'});
    }

    res.status(200).json(note);
}

// create a new note
const createNote = async (req, res) => {
    
    const {title, desc, category} = req.body;

    // add to db
    try {
        const note =  await Note.create({title, desc, category});
        res.status(200).json({note});
    } catch (err) {
        res.status(400).json({error: err.message});

    }
}

// delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such note found'});
    }
    const note = await Note.findOneAndDelete({_id: id});

    if(!note){
        return res.status(404).json({error: ' No such note found'});
    }

    res.status(200).json(note);

}

// update a note
const updateNote = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such note found'});
    }
    const note = await Note.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!note){
        return res.status(404).json({error: ' No such note found'});
    }

    res.status(200).json(note);

}


module.exports = {
    createNote,
    getNotes,
    getSingleNote,
    deleteNote,
    updateNote
}