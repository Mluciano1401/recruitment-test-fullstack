const connectDB = require('../config/db_config');

exports.create = (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const price = req.body.price;
    const desc = req.body.desc;
    const img = req.body.img;

    connectDB.query('INSERT INTO products SET ?',{
        name:name,
        price:price,
        description:desc,
        image:img}, 
        (error, result)=>{
        if(error){
            console.log(error.message);
            throw error;
        }
        else{
            res.send("Created!");
        }
    })
}

exports.show = (req, res) => {
    connectDB.query('SELECT * FROM products',(error, result)=>{
        if(error){
            throw error;
        }
        else{
            res.send(result);
        }
    })
}