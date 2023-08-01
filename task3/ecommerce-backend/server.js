const express = require('express');
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use('/api/', require('./routes/router'));
server.listen(4000, ()=>{
    console.log('The server is running very cool on port http://localhost:4000');
})