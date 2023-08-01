var mysql = require('mysql');

var connectDB = mysql.createConnection({
    host: "localhost",
    user: "mluciano",
    password: "12345678",
    database: "ecommerce"
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