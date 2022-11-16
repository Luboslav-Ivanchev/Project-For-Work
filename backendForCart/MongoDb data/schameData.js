const mongoose=require('mongoose');

const schema=new mongoose.Schema({
  image:String,
    name:String,
    price:String,
    weight:String,
    information:String,
  startedPrice:String,
  startedWeight:String

})

const realPro=new mongoose.model('Cargo',schema);

module.exports=realPro;