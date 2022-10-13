const { Router } = require("express");
const app = require("../app");
const router = Router();

const productModel = require("../models/product_model");

router.get('/api/products', async (req,res)=>{
    const products = await productModel.find().exec(function(err, products){
        if(err){
            res.json({succes:false, error:err})
            return;
        }

        res.json({ succes: true, data: products });
    })
});

router.post('/api/products/create', async (req, res)=>{
    const productData = req.body;
    const newProduct = new productModel(productData);
    await newProduct.save(function(err){
        if(!err){

            res.json({ sucess: false, error:err });
            return ;
        }
        
        console.log(productData)

        res.json({ sucess: true, data: newProduct });


        
    })
})


module.exports = router;