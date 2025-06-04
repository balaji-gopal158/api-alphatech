 const createOrder = require('../models/orderModel');
 const productModel = require('../models/productModel');
 
 
 exports.orderCreate = async (req,res,next)=>{
    const cartItems = req.body;
    const status = 'Pending';
    let TotalmultipleAmount = 0;
    let totalqtyAmount =0;
    let amount = 0;
    let productId='';
    for(let i=0; i < cartItems.length; i++){
        totalqtyAmount = cartItems[i].product.price*cartItems[i].qty;
        TotalmultipleAmount += totalqtyAmount;
        amount = Number(TotalmultipleAmount).toFixed(2)
    }
     
    const postOrder = await createOrder.create({cartItems,amount,status})
    for(let i=0; i < cartItems.length; i++){
        productId = cartItems[i].product.product_Id;
       const data = await productModel.findOne({product_Id:productId})
       data.stock = data.stock - cartItems[i].qty;
       await data.save();
    }
    res.json(
        {
            success:true,
            postOrder
        }
    )
 }