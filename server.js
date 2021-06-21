// //defining variables

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require('./routes/htmlRoutes')

// middleware to serve as a front-end as well as JSON data since we created a server
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// here we're accessing the root directory with the "/", to access html routes
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

//to start the server on the port
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});