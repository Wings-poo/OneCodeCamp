// Import
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodeParser = require("body-parser"); // for CRUD

// no need to initialize anywhere else
const app  = express();

// Middlewares
app.use(express.json());

// Routes
// app.use("/api/posts", require("./src/routes/post")); // from demo on POST
// for CRUD
app.use(bodeParser.urlencoded({extended: true}));
app.use(bodeParser.json());
app.get('/', (req, res) => {
    res.json({"message": "app.get"})
});

app.use("/api/crud", require("./src/routes/crud"));

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`Listening port ${process.env.PORT} and connected to MongoDB`);
            }) // any port ata
        })
        .catch((error) => {
            console.log("Error connecting to MongoDB:", error.message);
        })

/*
Credits/Reference for CRUD: https://medium.com/techvblogs/build-crud-api-with-node-js-express-and-mongodb-e3aa58da3915
*/