const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:String,
  price:String,
  product_Id:String,
  descrption:String,
  ratings:String,
  stock:Number,
  createdAt:String,
  images:[
    {
        image:String
    }
  ],
  catagory:String,
  seller:String
})

const productModel = mongoose.model('Product',productSchema)

module.exports = productModel;