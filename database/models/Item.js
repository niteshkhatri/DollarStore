const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  imagePath: String,
  totalQuantity: {
    type: Number,
    min: 0
  },
  pricePerItem: {
    type: SchemaTypes.Double,
    min: 0
  },
  available: {
    type: Boolean,
    default: true
  },
  tags: [String]
});

const Item = mongoose.model("item", ItemSchema);

module.exports = Item;
