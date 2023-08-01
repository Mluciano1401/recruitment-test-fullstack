const express = require('express');
const connectDB = require('./config/db_config');
const cors = require("cors");
const server = express();

connectDB();
server.use(cors());
server.use(express.json());

server.listen(4000, ()=>{
    console.log('The server is running very cool on port http://localhost:4000');
})