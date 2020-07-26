const mongoose = require('mongoose');

const { Schema } = mongoose;

const stockSchema = new Schema(
  {
    longName: { type: String, required: true },
    symbol: { type: String, required: true, unique: true },
    scripName: { type: String, required: true, unique: true },
    price: { type: Number, required: true, default: 0 },
    change: { type: Number, required: true, default: 0 },
    percentChange: { type: Number, required: true, default: 0 },
    volume: { type: Number, required: true, default: 0 },
    lastTradingTime: { type: String, required: true },
  },
  { collection: 'stocks' }
);

module.exports = mongoose.model('Stock', stockSchema);
