const { response } = require('express');
const productModel = require('../models/productModel');
exports.getProducts = async (req,res,next) =>{
     
      const products = await productModel.find({});
     res.json(
        {
          success:true,
          products 
        }
     )
}

exports.getProductsbtId = async (req,res,next)=>{
  
  try{
    const productId = req.params.id;
    const alldata = await productModel.find({})
    for(let i=0; i < alldata.length; i++){
        if(alldata){
         // console.log(alldata[i].product_Id)
        }
    }
    const data = await productModel.findOne({product_Id:productId})
    if(data){
      res.status(200).json(
        {
          success:true,
          response:data  
        }
     )
    }else{
      res.status(404).json(
        {
          success:false,
          response:"Data not found" 
        }
     )
    }
  } 
  catch(error){
    res.status(404).json(
      {
        success:false,
        message:error.message  
      }
   )
  }
    
}

exports.deleteProductbyId = async (req,res,next)=>{
    const id = req.params.id;
    try{
      const deletProduct = await productModel.findOneAndDelete({product_Id:id});
      if(deletProduct){
        res.status(200).json({
          status:true,
          message:'Product deleted !'
        })
      }else{
        res.status(404).json({
          message:'Not found'
        })
      }
    }
    catch(error){
     res.json({
      message:error.message
     })
    }
    console.log(id),'id'
}

exports.updateProductbyId = async (req,res,next)=>{

  // const id = req.params.id;
  // const bodydata = req.body;
  // const updateData = await productModel.findOneAndUpdate({product_Id:id},bodydata,{new:true})
  // console.log('updateData',updateData)
  // console.log('id',id)
  try{
    const id = req.params.id;
   const bodydata = req.body;
   const updateData = await productModel.findOneAndUpdate({product_Id:id},bodydata,{new:true})
   console.log('updateData',updateData)
   console.log('id',id)
   
   if(updateData){
     res.json({
      message:'Updated Successfully',
      updateData
     })
   }else{
    res.json({
      message:'Error found',
     })
   }
  }
  catch(error){
    res.status(500).json({
      message:error.message,
     })
  }
  
}