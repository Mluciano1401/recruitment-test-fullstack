const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud');
const auth = require('../auth/user');
const authverify = require('../middleware/verifytoken');

router.get('/products',authverify,crud.show);
router.post('/product',authverify, crud.create);
router.post('/login', auth.login);
router.post('/register', auth.register);
module.exports = router;