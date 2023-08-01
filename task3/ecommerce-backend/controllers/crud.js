const connectDB = require('../config/db_config');

exports.create = (req, res) => {
    const {name, price, desc, img} = req.body;

    connectDB.query('INSERT INTO products SET ?',{
        name:name,
        price:price,
        description:desc,
        image:img}, 
        (error, result)=>{
        if(error){
            res.status(500).send({"Error":error});
        }
        else{
            res.send("Created!");
        }
    })
}

exports.show = (req, res) => {
    connectDB.query('SELECT * FROM products',(error, result)=>{
        if(error){
            res.status(500).send({"Error":error});
        }
        else{
            res.send(result);
        }
    })
}