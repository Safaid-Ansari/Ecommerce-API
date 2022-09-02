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
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ecommerce API </h1>");
});
app.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log("my server is running at port No ", port);
});
