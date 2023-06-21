var express = require('express');
var router = express.Router();

const shoesCtrl = require('../controllers/shoes');

// /shoes

router.get('/new', shoesCtrl.new);

router.post('/', shoesCtrl.create);

router.get('/', shoesCtrl.index);

//working on this

router.get('/:id', shoesCtrl.show)




module.exports = router;
