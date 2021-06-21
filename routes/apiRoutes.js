const fs = require('fs');
const router = require('express').Router()

const uniqid = require('uniqid');

const database = require("../db/db.json");

// GET to read db.json file
router.get('/notes', (req,res) => {
    let results = database;
    res.json(results);
});

//post route to notes
router.post('/notes', (req,res) => {
    const newNote = req.body;
    newNote.id = uniqid();

    database.push(newNote);
    
    fs.writeFile("../db/db.json", JSON.stringify(database), (err) => {
        if (err) throw err;
        res.json(newNote);
    });
   
});

module.exports = router