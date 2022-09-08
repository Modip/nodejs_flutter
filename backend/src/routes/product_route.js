const { Router } = require("express");
const router = Router();

const productModel = require("../models/product_model");


router.post('/api/products/create', async (req, res)=>{
    const productData = req.body;
    const newProduct = new productModel(productData);
    await newProduct.save(function(err){
        if (err){
            res.json({sucess: false, error:err});
            return
        }

        res.json({
            sucess:true, data:newProduct
        });
    });
});


module.exports = router;