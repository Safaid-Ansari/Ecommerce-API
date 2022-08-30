const mongoose = require("mongoose");

// Here we are defining the structure of the document
const CommerceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Products = mongoose.model("Products", CommerceSchema);

module.exports = Products;
