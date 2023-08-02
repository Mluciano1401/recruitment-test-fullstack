const jwt = require('jsonwebtoken');

function authverify(req,res, next){
    try{
        const header = req.headers.authorization;
        if(!header){
            res.status(401).send({"error": "No authorization header provide"});
        }
        const token = header.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded;
        next();
    }
    catch (error){
        res.status(501).send({"error":"invalid or expired token"});
    }
}
module.exports = authverify;
