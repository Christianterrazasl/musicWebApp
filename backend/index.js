const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router.js");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api", router);
require("./config/dbConfig.js");
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

