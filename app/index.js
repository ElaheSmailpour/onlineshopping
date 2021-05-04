const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/index")


class App {
    constructor() {
        this.setupConfig()
        this.setupServer()
        this.setupDB()
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

    setupDB() {
        
        let addressString = process.env.mongo || "mongodb://localhost:27017/onlineshopping";
        let optionen = { useNewUrlParser: true, useUnifiedTopology: true };
        
        mongoose.connect(addressString, optionen).then( (mongooseModul) => {
            console.log("connected...");
         
    
        } ).catch( (error) => {
            console.error("MongoDB error: "+error);
        } );
        

}
}

module.exports = App;