const connectDB = require('../config/db_config');

exports.create = (req, res) => {
    const {name, price, desc, img} = req.body;
    let blob = null;
    if(img != null){
        blob = Buffer.from(img,"binary");
    }    
    connectDB.query('INSERT INTO products SET ?',{
        name:name,
        price:price,
        description:desc,
        image: blob}, 
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
            const newresult = [];
            for(let i = 0; i < result.length; i ++){
                if(result[i].image != null){             
                   const buffer = result[i].image; 
                   const base64String = buffer.toString('base64');
                    const newr = {
                            "name":result[i].name,
                            "price":result[i].price,
                            "description":result[i].description,
                            "image": `data:image/png;base64,${base64String}`}
                    newresult.push(newr);
                }else{
                    newresult.push(result[i]);
                }
            }         
            res.send(newresult);
        }            
    })
}