class ProductController {
    productList(req,res){
        res.send(req.user._id)
    }
}

module.exports = new ProductController()