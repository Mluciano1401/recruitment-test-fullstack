const jwt = require("jsonwebtoken");
const connectDB = require('../config/db_config');

exports.login = (req,res) => {
    const {email, password} = req.body;
    connectDB.query('SELECT * FROM users WHERE user=? AND password=?', [email,password], (error,result) => {
        if(error){
            res.status(500).send({"Error":error});
        }
        else if (result.length > 0){
            const user = result[0];
            const token = jwt.sign({id: user.id}, "your-256-bit-secret");
            res.send({"token":token});
        }
        else{
            res.status(401).send("");
        }
    })

}

exports.register = (req, res) => {
    const {email, password} = req.body;
    connectDB.query('INSERT INTO users SET ?',{
        user:email,
        password:password },
        (error, result)=>{
        if(error){
            res.status(500).send({"Error":error});
        }
        else{
            const token = jwt.sign({id: email}, "your-256-bit-secret");
            res.send({"msg":"Created!", "token":token});
        }
    })
}