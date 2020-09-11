require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./routes");
//================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
//================================
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})