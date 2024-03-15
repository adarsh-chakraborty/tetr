require("dotenv").config();
// require('./config/db');
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/apiRoutes");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api", apiRoutes);
app.use("/", (req,res,next) => {
    res.send("All Set!");
});


if (process.env.ENV === 'development')
    mongoose.set('debug', true);
    
mongoose.connect(process.env.DB).then(() => {
    console.log("Connected to mongodb! (Hopefully)");
    app.listen(PORT, () => {
        console.log("Server is running on ", PORT);
    });
}).catch(err => {
    console.log(err);
});
