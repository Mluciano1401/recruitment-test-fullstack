const jwt = require('jsonwebtoken');

function authverify(req,res, next){
    try{
        const header = req.headers.authoriztion;
        if(!header){
            res.status(401).send({"error": "No authorization header provide"});
        }
        const token = header.replace('Bearer', '');
        const decoded = jwt.verify(token, "your-256-bit-secret");
        req.user = decoded;
        next();
    }
    catch (error){
        res.status(501).send({"error":"invalid or expired token"});
    }
}
module.exports = authverify;
