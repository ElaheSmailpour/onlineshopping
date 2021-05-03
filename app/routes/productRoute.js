const router=require("express").Router()
const productController=require("../http/controller/ProductController")
router.get("/api/list",productController.productlist)



module.exports=router