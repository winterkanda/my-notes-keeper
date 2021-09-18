const router = require('express').Router();

const path = require('path');

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//this grabs notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//this route links to the index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router