require("dotenv").config();
require('./config/db');
const express = require("express");
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
app.listen(PORT, () => {

    console.log("Server is running on ", PORT);
});