var express = require('express');
var router = express.Router();

const shoesCtrl = require('../controllers/shoes');

// /shoes

router.get('/new', shoesCtrl.new);

router.post('/', shoesCtrl.create);

router.get('/', shoesCtrl.index);

//working on this

router.get('/:id', shoesCtrl.show)

router.get('/:id/edit', shoesCtrl.edit);






module.exports = router;
