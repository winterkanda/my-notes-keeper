//defining variables
const fs = require('fs');
const path = require('path');

const express = require('express');
const database = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// middleware to serve as a front-end as well as JSON data since we created a server
app.use(express.static('public'));

//HTML Routes, to load page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// GET to read db.json file
app.get('/api/notes', (req,res) => {
    let results = database;
    res.json(results);
});

app.get('/', (req,res) =>{
    res.sendFile(path.join(_dirname, '/public/index.html'));
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});