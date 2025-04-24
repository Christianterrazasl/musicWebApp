const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router.js");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/', router);
require("./config/dbConfig.js");
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

