const express = require('express');
const morgan = require('morgan');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./router');
const path = require('path');

//DB setup
const uri = process.env.MONGODB_URI;
mongoose.connect(uri || "mongodb://localhost:pizza/pizza",{ useNewUrlParser : true, useCreateIndex : true });
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Mongodb connection established successfully");
});

//App setup
app.use(morgan('combined'));//Used for logging 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
    }));
app.use(cors());
router(app);

//server setup
const port = process.env.PORT || 5050;
const server = http.createServer(app);
server.listen(port);

//for production
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));

    // Express serve up index.html file if it doesn't recognize route
  
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

console.log(`Server is listening on port :`, port );