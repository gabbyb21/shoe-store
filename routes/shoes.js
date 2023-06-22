var express = require('express');
var router = express.Router();

const shoesCtrl = require('../controllers/shoes');

// /shoes

router.get('/new', shoesCtrl.new);

router.post('/', shoesCtrl.create);

router.get('/', shoesCtrl.index);

router.get('/:id', shoesCtrl.show)


//working on this
router.get('/:id/edit', shoesCtrl.edit);

router.put('/:id', shoesCtrl.update)



module.exports = router;
