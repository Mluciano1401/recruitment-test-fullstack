var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "mluciano",
    password: "12345678",
    database: "ecommerce"
});

const connectDB = async () => {
    try{
        connection.connect(() => {
            console.log("DB connected!")
        })
    }
    catch(error){
        throw error;
    }
}

module.exports = connectDB;