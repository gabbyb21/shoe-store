const Shoe = require('../models/shoe');

module.exports = {
  index,
  new: newShoes,
  create,
  update,
  show
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
//codes above work



async function show(req,res){
  // console.log(req.params.id)
  const shoeDetails = await Shoe.findById(req.params.id)
  res.render('shoes/show',{
    shoe : shoeDetails,
    title: 'Edit shoes'
  } )
}


function update(req, res) {
  req.body.done = !!req.body.done;
  Shoe.update(req.params.id, req.body);
  res.redirect(`/shoes/${req.params.id}`);
}