const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/connection");
const Products = require("./modals/ECommerceSchema");
const router = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for environment variable
require("dotenv").config();

const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/products", router);
app.get("/", (req, res) => {
  res.send(
    "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>Welcome to Ecommerce API </h1></body>"
  );
});
app.get("*", (req, res) => {
  res.send(
    "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>ERROR 404 </h1></body>"
  );
});

app.listen(port, () => {
  console.log("my server is running at port No ", port);
});
