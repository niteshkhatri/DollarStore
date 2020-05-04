const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const TransactionSchema = new mongoose.Schema({
  userId: String,
  items: Array({
    itemId: String,
    quantity: {
      type: Number,
      min: 1
    },
    price: {
      type: SchemaTypes.Double,
      min: 0
    },
    name: String,
    imagePath: String
  }),
  timestamp: {
    type: Date,
    default: Date.now
  },
  totalPrice: {
    type: SchemaTypes.Double,
    min: 0
  },
  deliveryAddress: String
});

const Transaction = mongoose.model("transaction", TransactionSchema);
module.exports = Transaction;
