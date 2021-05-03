const User = require("../model/user")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



class UserController {
    async login(req, res) {
   
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email})
        if (!user)
            return res.status(404).send("User Not Found")
        const match = await bcrypt.compare(password, user.password)
        if (!match)
            return res.status(404).send("password incorrect")
        const token = jwt.sign({email, _id: user._id}, process.env.JWT_KEY)
        res.send(token);
    }

    async signup(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
        const gender = req.body.gender;
        const user = new User({
            email,
            password,
            name, gender
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)
        await user.save()
        const token = jwt.sign({email, _id: user._id}, process.env.JWT_KEY,{expiresIn: '3s'})
        res.send(token);
    }
}

module.exports = new UserController();

