const router = require("express").Router()

const userRoute = require("./userRoute");
const productRoute = require("./productRoute");
router.use(userRoute)
router.use(productRoute)
module.exports = router;