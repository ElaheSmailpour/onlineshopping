const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/index")

class App {
    constructor() {
        this.setupConfig()
        this.setupServer()
        this.setupDb()
    }

    setupServer() {
        const app = express();
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))
        app.listen(process.env.BACKEND_PORT, () => {
            console.log(`app listen to port ${process.env.BACKEND_PORT}`)
        })

        app.use(routes);
    }

    setupConfig() {
        require("dotenv").config();
    }

    setupDb() {
        mongoose.connect("mongodb://localhost:27017/germanOnlineShop", (err) => {
            if (err)
                console.log(err)
            else console.log("db connected")
        })
    }

}

module.exports = App;