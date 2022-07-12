const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()




//Brings in mongoose and MongoDB
require('./Server/config/mogoose.config')


// install in server.js ('root folder' (taskManager))
// npm install cors (install it when express gets installed)
// will install the ability to make cross-origin requests between port 3000 and 8000 (allows both servers to talk)
app.use(cors());



// Must have to be able to use request.body and take in form data (must be above any post requests)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Brings in the routes
// Gets fired first and sends data to the routes file
// runs express through (app)?
require('./Server/routes/userRoutes');



// opens up the port on http://localhost:8000
const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));