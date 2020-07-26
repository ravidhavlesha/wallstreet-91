const mongoose = require('mongoose');

const { Schema } = mongoose;

const userStockSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    stocks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Stock',
      },
    ],
  },
  { collection: 'userStocks' }
);

module.exports = mongoose.model('UserStock', userStockSchema);
