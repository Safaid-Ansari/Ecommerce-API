const express = require("express");
const app = express();
const db = require("./config/connection");
const Products = require("./modals/ECommerceSchema");
const router = require("./routes/index");

// for environment variable
require("dotenv").config();
console.log(process.env.port);

const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/products", router);

app.listen(port, () => {
  console.log("my server is running at port No ", port);
});
