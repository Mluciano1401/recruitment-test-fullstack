const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud')

router.get('/products',crud.show);
router.post('/product', crud.create);

module.exports = router;