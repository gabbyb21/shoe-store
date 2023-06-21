const Shoe = require('../models/shoe');

module.exports = {
  index,
  new: newShoes,
  create,
  update
};


function newShoes(req, res) {
  res.render('shoes/new')
}

async function create(req, res) {
  try {
    await Shoe.create(req.body);
    res.redirect('/shoes')
    console.log(req.body)
  } catch (err) {
    res.render('shoes/new')
  }
}

async function index(req, res) {
  const shoesDetails = await Shoe.find({})
  res.render('shoes/index', {
    shoes: shoesDetails
  })
}

function update(req, res) {
  req.body.done = !!req.body.done;
  Shoe.update(req.params.id, req.body);
  res.redirect(`/shoes/${req.params.id}`);
}