var mysql = require('mysql');

var connectDB = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME 
});

connectDB.connect((error) => {
    if(error){
        throw error;
    }
    else{
       console.log("DB connected!");
    }
    
})

module.exports = connectDB;