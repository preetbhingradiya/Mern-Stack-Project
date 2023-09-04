const  Router  = require("express");
const { getAllPrduct, createProduct, updateProduct, deleteProduct, createReview } = require("../controllers/product-control");
const { Auth, authorizeRole } = require("../middleware/auth");

const product=Router()

product.get('/product',getAllPrduct)

product.post('/product/new',Auth, authorizeRole("admin") , createProduct)

product.patch('/product/:id',Auth, authorizeRole("admin") ,updateProduct)

product.delete('/product/:id',Auth, authorizeRole("admin") , deleteProduct)

product.put('/product/review',Auth,createReview)

module.exports=product