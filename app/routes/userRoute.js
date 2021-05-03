const router = require("express").Router()
const userController = require("../http/controller/UserController")

router.post("/api/login",userController.login)
router.post("/api/signup",userController.signup)

module.exports = router;
