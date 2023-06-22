const { clearCache } = require('ejs');
const Shoe = require('../models/shoe');

module.exports = {
  index,
  new: newShoes,
  create,
  update,
  show,
  edit
};

//renders a page where we add new shoes
function newShoes(req, res) {
  res.render('shoes/new')
}

//this belongs to the newShoes function, this does the actual work to add shoes
async function create(req, res) {
  try {
    await Shoe.create(req.body);
    res.redirect('/shoes')
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


//This function renders the page of a single shoe with its detals
async function show(req,res){
  // console.log(req.params.id)
  const shoe = await Shoe.findById(req.params.id)
  res.render('shoes/show',{
    title: 'Edit shoes',
    shoe
  } )
}


//this reders the editing page
async function edit(req, res) {
  const shoe = await Shoe.findById(req.params.id);
  res.render('shoes/edit', {
    title: 'Edit Shoe',
    shoe
  });
}

//this does the work on editing page
//shoes/id/edit
async function update(req,res){
  try{
    const updatedShoe = {
      brand: req.body.brand,
      size: req.body.size,
      color: req.body.color
    };
    await Shoe.findByIdAndUpdate(req.params.id, updatedShoe);
    const shoes = await Shoe.find()
    res.render('shoes/index', {shoes})
  }catch(err){
    console.log(err)
  }
}