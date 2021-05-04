const router=require("express").Router()
const ProductController=require("../http/controller/ProductController")
router.get("/api/list",ProductController.productList)



module.exports=router